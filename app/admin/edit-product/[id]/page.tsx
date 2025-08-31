'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation';
import { Plus, X, CheckCircle, AlertCircle, Upload, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// Form validation schema
const updateProductSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  type: z.string().min(1, 'Type is required'),
  price: z.string().min(1, 'Price is required'),
  button: z.string().default('BOOK NOW'),
  image: z.instanceof(File).optional().or(z.string().url('Must be a valid URL').or(z.literal(''))),
  imageUrl: z.string().optional(),
  imageFile: z.instanceof(File).optional(),
  inclusions: z.array(z.string().min(1, 'Inclusion cannot be empty')).min(1, 'At least one inclusion is required'),
});

type UpdateProductFormData = z.infer<typeof updateProductSchema> & {
  imageFile?: File;
};

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
    clearErrors,
  } = useForm<UpdateProductFormData>({
    resolver: zodResolver(updateProductSchema),
  });

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          setIsLoading(true);
          const response = await axios.get(`http://145.223.101.153/api/singleproduct/${id}`);
          const product = response.data.product;
          reset({
            title: product.title,
            type: product.type,
            price: product.price,
            button: product.button,
            inclusions: product.inclusions,
            imageUrl: product.image || '',
          });
          if (product.image) {
            setPreviewUrl(product.image);
          }
        } catch (error) {
          setSubmitStatus('error');
          setSubmitMessage('Failed to load product data.');
        } finally {
          setIsLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id, reset]);

  const watchedInclusions = watch('inclusions', []);

  const addInclusion = () => {
    setValue('inclusions', [...watchedInclusions, '']);
  };

  const removeInclusion = (index: number) => {
    if (watchedInclusions.length > 1) {
      setValue('inclusions', watchedInclusions.filter((_, i) => i !== index));
    }
  };

  const updateInclusion = (index: number, value: string) => {
    const newInclusions = [...watchedInclusions];
    newInclusions[index] = value;
    setValue('inclusions', newInclusions);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('imageFile', file);
      setValue('imageUrl', '');
      clearErrors('image');
      const reader = new FileReader();
      reader.onload = () => setPreviewUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setValue('imageUrl', url);
    setValue('imageFile', undefined);
    clearErrors('image');
    setPreviewUrl(url || null);
  };

  const removeImage = () => {
    setValue('imageFile', undefined);
    setValue('imageUrl', '');
    setPreviewUrl(null);
    clearErrors('image');
  };

  const onSubmit = async (data: UpdateProductFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const filteredData = {
        ...data,
        inclusions: data.inclusions.filter((inc) => inc.trim() !== ''),
      };

      // If no new image file is being uploaded, send as JSON
      if (!filteredData.imageFile) {
        const payload = {
          title: filteredData.title,
          type: filteredData.type,
          price: filteredData.price,
          button: filteredData.button,
          inclusions: filteredData.inclusions,
          imageUrl: filteredData.imageUrl,
        };

        await axios.put(`http://145.223.101.153/api/update/${id}`, payload, {
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        // If a new image file is present, send as multipart/form-data
        const formData = new FormData();
        formData.append('title', filteredData.title);
        formData.append('type', filteredData.type);
        formData.append('price', filteredData.price);
        formData.append('button', filteredData.button || 'BOOK NOW');
        filteredData.inclusions.forEach((inc) => formData.append('inclusions[]', inc));
        formData.append('image', filteredData.imageFile);

        await axios.put(`http://145.223.101.153/api/update/${id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }

      setSubmitStatus('success');
      setSubmitMessage('Product updated successfully!');

      setTimeout(() => {
        router.push('/admin/products');
      }, 2000);

    } catch (error: any) {
      setSubmitStatus('error');
      setSubmitMessage(error.response?.data?.message || 'Failed to update product.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <RefreshCw className="w-6 h-6 animate-spin text-primary" />
        <span className="ml-2 text-muted-foreground">Loading product...</span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Edit Product</h1>
        <p className="text-muted-foreground mt-2">Update the details of your tour package or service.</p>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-800 font-medium">{submitMessage}</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <span className="text-red-800 font-medium">{submitMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-gray-700 font-medium">Title *</Label>
              <Input id="title" {...register('title')} className={`bg-gray-50 border-gray-300 ${errors.title ? 'border-red-500' : ''}`} />
              {errors.title && <p className="text-sm text-red-600">{errors.title.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="type" className="text-gray-700 font-medium">Type *</Label>
              <Input id="type" {...register('type')} className={`bg-gray-50 border-gray-300 ${errors.type ? 'border-red-500' : ''}`} />
              {errors.type && <p className="text-sm text-red-600">{errors.type.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-2">
                  <Label htmlFor="price" className="text-gray-700 font-medium">Price *</Label>
                  <Input id="price" {...register('price')} className={`bg-gray-50 border-gray-300 ${errors.price ? 'border-red-500' : ''}`} />
                  {errors.price && <p className="text-sm text-red-600">{errors.price.message}</p>}
              </div>
              <div className="space-y-2">
                  <Label htmlFor="button" className="text-gray-700 font-medium">Button Text</Label>
                  <Input id="button" {...register('button')} className="bg-gray-50 border-gray-300" />
              </div>
          </div>

          <div className="space-y-4">
            <Label className="text-gray-700 font-medium">Image</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="image-upload" className="text-gray-600">Upload New Image</Label>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <Upload className="w-8 h-8 mb-3 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <input id="image-upload" type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="image-url" className="text-gray-600">Or Use Image URL</Label>
                <Input id="image-url" placeholder="https://example.com/image.jpg" value={watch('imageUrl') || ''} onChange={handleImageUrlChange} className="bg-gray-50 border-gray-300" />
              </div>
            </div>
            {previewUrl && (
              <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <Label className="font-medium">Image Preview</Label>
                  <Button type="button" variant="ghost" size="sm" onClick={removeImage} className="text-red-500 hover:text-red-700">Remove</Button>
                </div>
                <div className="relative h-48 w-full rounded-md overflow-hidden border">
                  <img src={previewUrl} alt="Preview" className="object-cover w-full h-full" />
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-gray-700 font-medium">Inclusions *</Label>
              <Button type="button" variant="outline" size="sm" onClick={addInclusion}><Plus className="w-4 h-4 mr-2" />Add Inclusion</Button>
            </div>
            <div className="space-y-3">
              {watchedInclusions.map((_, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder={`Inclusion ${index + 1}`}
                    {...register(`inclusions.${index}`)}
                    className={`bg-gray-50 border-gray-300 ${errors.inclusions?.[index] ? 'border-red-500' : ''}`}
                  />
                  {watchedInclusions.length > 1 && (
                    <Button type="button" variant="outline" size="icon" onClick={() => removeInclusion(index)}><X className="w-4 h-4" /></Button>
                  )}
                </div>
              ))}
            </div>
            {errors.inclusions && <p className="text-sm text-red-600">{errors.inclusions.message}</p>}
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" size="lg" disabled={isSubmitting} className="min-w-[200px]">
            {isSubmitting ? 'Updating Product...' : 'Update Product'}
          </Button>
        </div>
      </form>
    </div>
  );
}
