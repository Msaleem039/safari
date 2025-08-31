'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { Plus, X, CheckCircle, AlertCircle, Upload, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// Form validation schema
const createProductSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  type: z.string().min(1, 'Type is required'),
  price: z.string().min(1, 'Price is required'),
  button: z.string().default('BOOK NOW'),
  image: z.instanceof(File).optional().or(z.string().url('Must be a valid URL').or(z.literal(''))),
  imageUrl: z.string().optional(),
  imageFile: z.instanceof(File).optional(),
  inclusions: z.array(z.string().min(1, 'Inclusion cannot be empty')).min(1, 'At least one inclusion is required'),
});

type CreateProductFormData = z.infer<typeof createProductSchema> & {
  imageFile?: File;
};

export default function CreateProductPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setError,
    clearErrors,
  } = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      button: 'BOOK NOW',
      inclusions: [''],
      imageUrl: '',
    },
  });

  const watchedInclusions = watch('inclusions');
  const imageFile = watch('imageFile');

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
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setValue('imageUrl', url);
    setValue('imageFile', undefined);
    clearErrors('image');
    
    if (url) {
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  const removeImage = () => {
    setValue('imageFile', undefined);
    setValue('imageUrl', '');
    setPreviewUrl(null);
    clearErrors('image');
  };

  const onSubmit = async (data: CreateProductFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
  
    try {
      // Filter out empty inclusions
      const filteredData = {
        ...data,
        inclusions: data.inclusions.filter((inclusion) => inclusion.trim() !== ""),
      };
  
      const formData = new FormData();
  
      // append all non-file fields
      formData.append("title", filteredData.title);
      formData.append("type", filteredData.type);
      formData.append("price", filteredData.price);
      formData.append("button", filteredData.button || "BOOK NOW");
  
      // ✅ append inclusions one by one instead of JSON.stringify
      filteredData.inclusions.forEach((inc) => {
        formData.append("inclusions[]", inc);
      });
      // ✅ handle image (file or URL)
      if (filteredData.imageFile) {
        formData.append("image", filteredData.imageFile);
      } else if (filteredData.imageUrl) {
        formData.append("imageUrl", filteredData.imageUrl);
      }
  
      const response = await axios.post(
        "http://145.223.101.153/api/product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      setSubmitStatus("success");
      setSubmitMessage("Product created successfully!");
  
      reset({
        button: "BOOK NOW",
        inclusions: [""],
        imageUrl: "",
      });
      setPreviewUrl(null);
  
      setTimeout(() => {
        setSubmitStatus("idle");
        setSubmitMessage("");
      }, 3000);
    } catch (error: any) {
      setSubmitStatus("error");
      setSubmitMessage(
        error.response?.data?.message ||
          "Failed to create product. Please try again."
      );
  
      setTimeout(() => {
        setSubmitStatus("idle");
        setSubmitMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Create New Product</h1>
        <p className="text-muted-foreground mt-2">
          Add a new tour package or service to your offerings
        </p>
      </div>

      {/* Status Messages */}
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

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6 shadow-sm">
          {/* Basic Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-gray-700 font-medium">Title *</Label>
              <Input
                id="title"
                placeholder="e.g., RED DUNE SAFARI WITH VIP SERVICE"
                {...register('title')}
                className={`bg-gray-50 border-gray-300 ${errors.title ? 'border-red-500' : ''}`}
              />
              {errors.title && (
                <p className="text-sm text-red-600">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="type" className="text-gray-700 font-medium">Type *</Label>
              <Input
                id="type"
                placeholder="e.g., For Friends & Family"
                {...register('type')}
                className={`bg-gray-50 border-gray-300 ${errors.type ? 'border-red-500' : ''}`}
              />
              {errors.type && (
                <p className="text-sm text-red-600">{errors.type.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-2">
              <Label htmlFor="price" className="text-gray-700 font-medium">Price *</Label>
              <Input
                id="price"
                placeholder="e.g., AED150/Per Person"
                {...register('price')}
                className={`bg-gray-50 border-gray-300 ${errors.price ? 'border-red-500' : ''}`}
              />
              {errors.price && (
                <p className="text-sm text-red-600">{errors.price.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="button" className="text-gray-700 font-medium">Button Text</Label>
              <Input
                id="button"
                placeholder="BOOK NOW"
                {...register('button')}
                className="bg-gray-50 border-gray-300"
              />
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="space-y-4">
            <Label className="text-gray-700 font-medium">Image</Label>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="image-upload" className="text-gray-600">Upload Image</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="image-upload"
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-gray-500" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 5MB)</p>
                    </div>
                    <input
                      id="image-upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>

              {/* URL Input */}
          
            </div>

            {/* Image Preview */}
            {previewUrl && (
              <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <Label className="text-gray-700 font-medium">Preview</Label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={removeImage}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    Remove
                  </Button>
                </div>
                <div className="relative h-48 w-full rounded-md overflow-hidden border border-gray-200">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            )}

            {errors.image && (
              <p className="text-sm text-red-600">{errors.image.message}</p>
            )}
          </div>

          {/* Inclusions */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-gray-700 font-medium">Inclusions *</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addInclusion}
                className="flex items-center gap-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                <Plus className="w-4 h-4" />
                Add Inclusion
              </Button>
            </div>

            <div className="space-y-3">
              {watchedInclusions.map((_, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder={`Inclusion ${index + 1} (e.g., Pickup and Drop off by 4×4 Vehicle)`}
                    value={watchedInclusions[index]}
                    onChange={(e) => updateInclusion(index, e.target.value)}
                    className={`bg-gray-50 border-gray-300 ${errors.inclusions?.[index] ? 'border-red-500' : ''}`}
                  />
                  {watchedInclusions.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeInclusion(index)}
                      className="shrink-0 border-gray-300 text-gray-500 hover:bg-gray-50"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {errors.inclusions && (
              <p className="text-sm text-red-600">{errors.inclusions.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            {isSubmitting ? 'Creating Product...' : 'Create Product'}
          </Button>
        </div>
      </form>
    </div>
  );
}