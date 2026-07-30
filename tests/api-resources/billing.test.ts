// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gitpod from '@gitpod/sdk';

const client = new Gitpod({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource billing', () => {
  // Mock server tests are disabled
  test.skip('getCreditUsageExport: only required params', async () => {
    const responsePromise = client.billing.getCreditUsageExport({
      dateRange: { endTime: '2024-01-31T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
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
  test.skip('getCreditUsageExport: required and optional params', async () => {
    const response = await client.billing.getCreditUsageExport({
      dateRange: { endTime: '2024-01-31T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      groupBy: 'CREDIT_USAGE_EXPORT_GROUP_BY_DAILY_SUMMARY',
    });
  });

  // Mock server tests are disabled
  test.skip('getCreditUsageReport: only required params', async () => {
    const responsePromise = client.billing.getCreditUsageReport({
      dateRange: { endTime: '2024-01-31T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
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
  test.skip('getCreditUsageReport: required and optional params', async () => {
    const response = await client.billing.getCreditUsageReport({
      dateRange: { endTime: '2024-01-31T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      filter: { subject: { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', principal: 'PRINCIPAL_UNSPECIFIED' } },
      timezone: 'timezone',
    });
  });

  // Mock server tests are disabled
  test.skip('getCumulativeCreditUsage: only required params', async () => {
    const responsePromise = client.billing.getCumulativeCreditUsage({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
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
  test.skip('getCumulativeCreditUsage: required and optional params', async () => {
    const response = await client.billing.getCumulativeCreditUsage({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      asOf: '2026-03-31T23:59:59Z',
    });
  });

  // Mock server tests are disabled
  test.skip('getEnterpriseAIUsageSummary: only required params', async () => {
    const responsePromise = client.billing.getEnterpriseAIUsageSummary({
      dateRange: { endTime: '2024-01-31T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
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
  test.skip('getEnterpriseAIUsageSummary: required and optional params', async () => {
    const response = await client.billing.getEnterpriseAIUsageSummary({
      dateRange: { endTime: '2024-01-31T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      timezone: 'timezone',
    });
  });

  // Mock server tests are disabled
  test.skip('getEnterpriseAIUsageTimeSeries: only required params', async () => {
    const responsePromise = client.billing.getEnterpriseAIUsageTimeSeries({
      dateRange: { endTime: '2024-01-31T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
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
  test.skip('getEnterpriseAIUsageTimeSeries: required and optional params', async () => {
    const response = await client.billing.getEnterpriseAIUsageTimeSeries({
      dateRange: { endTime: '2024-01-31T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      filter: { subject: { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', principal: 'PRINCIPAL_UNSPECIFIED' } },
      timezone: 'timezone',
    });
  });

  // Mock server tests are disabled
  test.skip('listEnterpriseAITeamUsage: only required params', async () => {
    const responsePromise = client.billing.listEnterpriseAITeamUsage({
      dateRange: { endTime: '2024-01-31T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
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
  test.skip('listEnterpriseAITeamUsage: required and optional params', async () => {
    const response = await client.billing.listEnterpriseAITeamUsage({
      dateRange: { endTime: '2024-01-31T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      token: 'token',
      pageSize: 0,
      filter: { teamIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] },
      pagination: { token: 'token', pageSize: 100 },
      timezone: 'timezone',
    });
  });

  // Mock server tests are disabled
  test.skip('listEnterpriseAIUserUsage: only required params', async () => {
    const responsePromise = client.billing.listEnterpriseAIUserUsage({
      dateRange: { endTime: '2024-01-31T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
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
  test.skip('listEnterpriseAIUserUsage: required and optional params', async () => {
    const response = await client.billing.listEnterpriseAIUserUsage({
      dateRange: { endTime: '2024-01-31T00:00:00Z', startTime: '2024-01-01T00:00:00Z' },
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      token: 'token',
      pageSize: 0,
      filter: { subject: { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', principal: 'PRINCIPAL_UNSPECIFIED' } },
      pagination: { token: 'token', pageSize: 100 },
      sort: { field: 'SORT_FIELD_UNSPECIFIED', order: 'SORT_ORDER_UNSPECIFIED' },
      timezone: 'timezone',
    });
  });

  // Mock server tests are disabled
  test.skip('listEnterpriseUserCreditUsage: only required params', async () => {
    const responsePromise = client.billing.listEnterpriseUserCreditUsage({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
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
  test.skip('listEnterpriseUserCreditUsage: required and optional params', async () => {
    const response = await client.billing.listEnterpriseUserCreditUsage({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      token: 'token',
      pageSize: 0,
      asOf: '2019-12-27T18:11:19.117Z',
      pagination: { token: 'token', pageSize: 50 },
      sort: { field: 'SORT_FIELD_UNSPECIFIED', order: 'SORT_ORDER_UNSPECIFIED' },
    });
  });
});
