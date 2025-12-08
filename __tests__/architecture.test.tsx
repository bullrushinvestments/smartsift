import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API responses and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      designs: [
        { id: '1', name: 'Design A' },
        { id: '2', name: 'Design B' }
      ]
    }
  })
}));

describe('Design Architecture Component Tests', () => {
  test('renders without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/designs/i)).toBeInTheDocument();
  });

  test('loads designs on component mount', async () => {
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));
    const designElements = screen.getAllByRole('listitem');
    expect(designElements.length).toBeGreaterThan(0);
  });

  test('displays loading state while fetching data', async () => {
    jest.spyOn(console, 'log').mockImplementation(() => {}); // Mock console.log to avoid noise
    render(<DesignArchitectureComponent />);
    const loadingIndicator = screen.getByRole('status');
    expect(loadingIndicator).toBeInTheDocument();
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));
  });

  test('displays error message on data fetch failure', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to load designs'));
    render(<DesignArchitectureComponent />);
    const errorMessage = screen.getByRole('alert');
    await waitFor(() => expect(errorMessage).toBeInTheDocument());
  });

  test('allows user interaction with design elements', () => {
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(fetchData).toHaveBeenCalledTimes(2); // Assuming a button click triggers another API call
  });

  test('ensures accessibility for screen readers', async () => {
    render(<DesignArchitectureComponent />);
    const designList = await screen.findByRole('list');
    expect(designList).toHaveAccessibleName(/designs/i);
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API responses and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      designs: [
        { id: '1', name: 'Design A' },
        { id: '2', name: 'Design B' }
      ]
    }
  })
}));

describe('Design Architecture Component Tests', () => {
  test('renders without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/designs/i)).toBeInTheDocument();
  });

  test('loads designs on component mount', async () => {
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));
    const designElements = screen.getAllByRole('listitem');
    expect(designElements.length).toBeGreaterThan(0);
  });

  test('displays loading state while fetching data', async () => {
    jest.spyOn(console, 'log').mockImplementation(() => {}); // Mock console.log to avoid noise
    render(<DesignArchitectureComponent />);
    const loadingIndicator = screen.getByRole('status');
    expect(loadingIndicator).toBeInTheDocument();
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));
  });

  test('displays error message on data fetch failure', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to load designs'));
    render(<DesignArchitectureComponent />);
    const errorMessage = screen.getByRole('alert');
    await waitFor(() => expect(errorMessage).toBeInTheDocument());
  });

  test('allows user interaction with design elements', () => {
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(fetchData).toHaveBeenCalledTimes(2); // Assuming a button click triggers another API call
  });

  test('ensures accessibility for screen readers', async () => {
    render(<DesignArchitectureComponent />);
    const designList = await screen.findByRole('list');
    expect(designList).toHaveAccessibleName(/designs/i);
  });
});