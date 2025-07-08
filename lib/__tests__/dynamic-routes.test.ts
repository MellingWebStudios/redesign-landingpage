import { test, expect } from 'vitest';
import { 
  SERVICES, 
  LOCATIONS, 
  isValidService,
  isValidLocation
} from '../data';

test('data constants have expected lengths', () => {
  expect(SERVICES).toHaveLength(12); // Updated expanded service list
  expect(LOCATIONS).toHaveLength(15); // UK cities
});

test('validation functions work correctly', () => {
  expect(isValidService('website-redesign')).toBe(true);
  expect(isValidService('invalid')).toBe(false);
  
  expect(isValidLocation('birmingham')).toBe(true);
  expect(isValidLocation('invalid')).toBe(false);
});

test('generateStaticParams would create correct number of pages', () => {
  // Location pages: /[location] = 15
  const locationPages = LOCATIONS.length;
  
  // Location + Service pages: /[location]/[service] = 15 × 12 = 180
  const locationServicePages = LOCATIONS.length * SERVICES.length;
  
  // Individual Service pages: /services/[service] = 12
  const individualServicePages = SERVICES.length;
  
  const totalDynamicPages = locationPages + locationServicePages + individualServicePages;
  
  // Expected: 15 + 180 + 12 = 207 pages (simplified structure, no industries)
  expect(totalDynamicPages).toBe(207);
});

test('route structure works correctly with new services', () => {
  // Test validation functions with expanded services
  expect(isValidService('web-development')).toBe(true);
  expect(isValidService('ecommerce-development')).toBe(true);
  expect(isValidService('website-maintenance')).toBe(true);
  expect(isValidService('speed-optimisation')).toBe(true);
  expect(isValidService('branding-design')).toBe(true);
  expect(isValidService('content-writing')).toBe(true);
  
  // Test location validation
  expect(isValidLocation('manchester')).toBe(true);
  expect(isValidLocation('london')).toBe(true);
  expect(isValidLocation('leeds')).toBe(true);
});
