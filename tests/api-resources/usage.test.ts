// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gitpod from '@gitpod/sdk';

const client = new Gitpod({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource usage', () => {
  // Mock server tests are disabled
  test.skip('getAdoptionUsageSummary: only required params', async () => {
    const responsePromise = client.usage.getAdoptionUsageSummary({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getAdoptionUsageSummary: required and optional params', async () => {
    const response = await client.usage.getAdoptionUsageSummary({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
      teamId: 'teamId',
      userId: 'userId',
    });
  });

  // Mock server tests are disabled
  test.skip('getAgentTraceSummary: only required params', async () => {
    const responsePromise = client.usage.getAgentTraceSummary({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getAgentTraceSummary: required and optional params', async () => {
    const response = await client.usage.getAgentTraceSummary({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
      teamId: 'teamId',
      userId: 'userId',
    });
  });

  // Mock server tests are disabled
  test.skip('getAgentTraceTimeSeries: only required params', async () => {
    const responsePromise = client.usage.getAgentTraceTimeSeries({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getAgentTraceTimeSeries: required and optional params', async () => {
    const response = await client.usage.getAgentTraceTimeSeries({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
      resolution: 'RESOLUTION_WEEKLY',
      teamId: 'teamId',
      userId: 'userId',
    });
  });

  // Mock server tests are disabled
  test.skip('getCoAuthorSummary: only required params', async () => {
    const responsePromise = client.usage.getCoAuthorSummary({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCoAuthorSummary: required and optional params', async () => {
    const response = await client.usage.getCoAuthorSummary({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
      teamId: 'teamId',
      userId: 'userId',
    });
  });

  // Mock server tests are disabled
  test.skip('getCoAuthorTimeSeries: only required params', async () => {
    const responsePromise = client.usage.getCoAuthorTimeSeries({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCoAuthorTimeSeries: required and optional params', async () => {
    const response = await client.usage.getCoAuthorTimeSeries({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
      resolution: 'RESOLUTION_WEEKLY',
      teamId: 'teamId',
      userId: 'userId',
    });
  });

  // Mock server tests are disabled
  test.skip('getPrSummary: only required params', async () => {
    const responsePromise = client.usage.getPrSummary({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPrSummary: required and optional params', async () => {
    const response = await client.usage.getPrSummary({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
      teamId: 'teamId',
      userId: 'userId',
    });
  });

  // Mock server tests are disabled
  test.skip('getPrTimeSeries: only required params', async () => {
    const responsePromise = client.usage.getPrTimeSeries({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPrTimeSeries: required and optional params', async () => {
    const response = await client.usage.getPrTimeSeries({
      dateRange: { endTime: '2024-02-01T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
      resolution: 'RESOLUTION_WEEKLY',
      teamId: 'teamId',
      userId: 'userId',
    });
  });

  // Mock server tests are disabled
  test.skip('listEnvironmentRuntimeRecords', async () => {
    const responsePromise = client.usage.listEnvironmentRuntimeRecords({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
