import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecification {
  businessName: string;
  description: string;
  industryType: string;
  features?: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecification>();

  const onSubmit: SubmitHandler<BusinessSpecification> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/businesses', data);
      reset();
      setError(null);
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Create Business Specification</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="businessName" className="block mb-1">Business Name</label>
          <input
            type="text"
            id="businessName"
            {...register('businessName', { required: 'This is required' })}
            className={clsx(
              "w-full px-3 py-2 border rounded",
              errors.businessName && "border-red-500 focus:border-red-500"
            )}
          />
          <p className="text-red-500">{errors.businessName?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This is required' })}
            rows={5}
            className={clsx(
              "w-full px-3 py-2 border rounded",
              errors.description && "border-red-500 focus:border-red-500"
            )}
          />
          <p className="text-red-500">{errors.description?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="industryType" className="block mb-1">Industry Type</label>
          <select
            id="industryType"
            {...register('industryType', { required: 'This is required' })}
            className={clsx(
              "w-full px-3 py-2 border rounded",
              errors.industryType && "border-red-500 focus:border-red-500"
            )}
          >
            <option value="">Select Industry Type</option>
            {/* Add industry options here */}
          </select>
          <p className="text-red-500">{errors.industryType?.message}</p>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={clsx(
            "w-full px-4 py-2 bg-blue-600 text-white rounded",
            loading && "opacity-50 cursor-not-allowed"
          )}
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecification {
  businessName: string;
  description: string;
  industryType: string;
  features?: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecification>();

  const onSubmit: SubmitHandler<BusinessSpecification> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/businesses', data);
      reset();
      setError(null);
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Create Business Specification</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="businessName" className="block mb-1">Business Name</label>
          <input
            type="text"
            id="businessName"
            {...register('businessName', { required: 'This is required' })}
            className={clsx(
              "w-full px-3 py-2 border rounded",
              errors.businessName && "border-red-500 focus:border-red-500"
            )}
          />
          <p className="text-red-500">{errors.businessName?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This is required' })}
            rows={5}
            className={clsx(
              "w-full px-3 py-2 border rounded",
              errors.description && "border-red-500 focus:border-red-500"
            )}
          />
          <p className="text-red-500">{errors.description?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="industryType" className="block mb-1">Industry Type</label>
          <select
            id="industryType"
            {...register('industryType', { required: 'This is required' })}
            className={clsx(
              "w-full px-3 py-2 border rounded",
              errors.industryType && "border-red-500 focus:border-red-500"
            )}
          >
            <option value="">Select Industry Type</option>
            {/* Add industry options here */}
          </select>
          <p className="text-red-500">{errors.industryType?.message}</p>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={clsx(
            "w-full px-4 py-2 bg-blue-600 text-white rounded",
            loading && "opacity-50 cursor-not-allowed"
          )}
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;