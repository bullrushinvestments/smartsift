import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests

interface Test {
  id: string;
  title: string;
  description: string;
}

interface CreateTestVariables {
  input: {
    title: string;
    description: string;
  };
}

interface WriteTestsFormInputs {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [createTest] = useMutation<CreateTest, CreateTestVariables>(CREATE_TEST);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<WriteTestsFormInputs>();

  const onSubmit: SubmitHandler<WriteTestsFormInputs> = async (data) => {
    try {
      await createTest({
        variables: {
          input: {
            title: data.title,
            description: data.description
          }
        },
        update(cache, { data }) {
          if (!data?.createTest) return;
          cache.writeQuery<Test>({
            query: GET_TESTS, // Assume this is a GraphQL query to get all tests
            data: { tests: [data.createTest, ...cache.readQuery<Test>({ query: GET_TESTS }).tests] }
          });
        },
      });
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Write Tests</h1>
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Test creation form" role="form">
        <div className="mb-3">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'This field is required' })}
            aria-required="true"
            aria-invalid={errors.title ? true : undefined}
            className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500 focus:border-red-500' : ''}`}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This field is required' })}
            aria-required="true"
            aria-invalid={errors.description ? true : undefined}
            rows={4}
            className={`w-full px-3 py-2 border rounded ${errors.description ? 'border-red-500 focus:border-red-500' : ''}`}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
          Create Test
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests

interface Test {
  id: string;
  title: string;
  description: string;
}

interface CreateTestVariables {
  input: {
    title: string;
    description: string;
  };
}

interface WriteTestsFormInputs {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [createTest] = useMutation<CreateTest, CreateTestVariables>(CREATE_TEST);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<WriteTestsFormInputs>();

  const onSubmit: SubmitHandler<WriteTestsFormInputs> = async (data) => {
    try {
      await createTest({
        variables: {
          input: {
            title: data.title,
            description: data.description
          }
        },
        update(cache, { data }) {
          if (!data?.createTest) return;
          cache.writeQuery<Test>({
            query: GET_TESTS, // Assume this is a GraphQL query to get all tests
            data: { tests: [data.createTest, ...cache.readQuery<Test>({ query: GET_TESTS }).tests] }
          });
        },
      });
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Write Tests</h1>
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Test creation form" role="form">
        <div className="mb-3">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'This field is required' })}
            aria-required="true"
            aria-invalid={errors.title ? true : undefined}
            className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500 focus:border-red-500' : ''}`}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This field is required' })}
            aria-required="true"
            aria-invalid={errors.description ? true : undefined}
            rows={4}
            className={`w-full px-3 py-2 border rounded ${errors.description ? 'border-red-500 focus:border-red-500' : ''}`}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
          Create Test
        </button>
      </form>
    </div>
  );
};

export default WriteTests;