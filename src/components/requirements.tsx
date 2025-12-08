import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Requirement {
  id: string;
  name: string;
  description: string;
}

interface FormData {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('/api/requirements');
      setRequirements(response.data);
    } catch (error) {
      console.error('Failed to fetch requirements:', error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      setLoading(true);
      await axios.post('/api/requirements', data);
      reset();
      fetchRequirements();
    } catch (error) {
      console.error('Failed to submit requirement:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="requirementName" className="block text-sm font-medium text-gray-700">
            Requirement Name
          </label>
          <input
            id="requirementName"
            type="text"
            {...register('requirementName', { required: true })}
            className={clsx(
              'w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500',
              {
                'border-red-500': errors.requirementName
              }
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="requirementDescription" className="block text-sm font-medium text-gray-700">
            Requirement Description
          </label>
          <textarea
            id="requirementDescription"
            {...register('requirementDescription', { required: true })}
            rows={3}
            className={clsx(
              'w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500',
              {
                'border-red-500': errors.requirementDescription
              }
            )}
          />
        </div>
        <button type="submit" disabled={loading} className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          {loading ? 'Submitting...' : 'Submit Requirement'}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-2">Requirements List</h3>
        <ul role="list" aria-label="Requirement list" className="space-y-4">
          {requirements.map(requirement => (
            <li key={requirement.id} className="p-4 bg-gray-100 rounded-md flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-700">{requirement.name}</h4>
                <p className="text-xs text-gray-500">{requirement.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Requirement {
  id: string;
  name: string;
  description: string;
}

interface FormData {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('/api/requirements');
      setRequirements(response.data);
    } catch (error) {
      console.error('Failed to fetch requirements:', error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      setLoading(true);
      await axios.post('/api/requirements', data);
      reset();
      fetchRequirements();
    } catch (error) {
      console.error('Failed to submit requirement:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="requirementName" className="block text-sm font-medium text-gray-700">
            Requirement Name
          </label>
          <input
            id="requirementName"
            type="text"
            {...register('requirementName', { required: true })}
            className={clsx(
              'w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500',
              {
                'border-red-500': errors.requirementName
              }
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="requirementDescription" className="block text-sm font-medium text-gray-700">
            Requirement Description
          </label>
          <textarea
            id="requirementDescription"
            {...register('requirementDescription', { required: true })}
            rows={3}
            className={clsx(
              'w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500',
              {
                'border-red-500': errors.requirementDescription
              }
            )}
          />
        </div>
        <button type="submit" disabled={loading} className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          {loading ? 'Submitting...' : 'Submit Requirement'}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-2">Requirements List</h3>
        <ul role="list" aria-label="Requirement list" className="space-y-4">
          {requirements.map(requirement => (
            <li key={requirement.id} className="p-4 bg-gray-100 rounded-md flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-700">{requirement.name}</h4>
                <p className="text-xs text-gray-500">{requirement.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GatherRequirements;