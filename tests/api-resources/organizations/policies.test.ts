// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gitpod from '@gitpod/sdk';

const client = new Gitpod({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource policies', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.organizations.policies.retrieve({
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

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.organizations.policies.retrieve({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.organizations.policies.update({
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

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.organizations.policies.update({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      allowedEditorIds: ['string'],
      allowLocalRunners: true,
      defaultEditorId: 'defaultEditorId',
      defaultEnvironmentImage: 'defaultEnvironmentImage',
      maximumEnvironmentsPerUser: '20',
      maximumEnvironmentTimeout: '3600s',
      maximumRunningEnvironmentsPerUser: '5',
      membersCreateProjects: true,
      membersRequireProjects: true,
      portSharingDisabled: true,
    });
  });
});
