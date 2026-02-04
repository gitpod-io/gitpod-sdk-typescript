// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gitpod from '@gitpod/sdk';

const client = new Gitpod({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource policies', () => {
  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.organizations.policies.retrieve({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.organizations.policies.update({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      agentPolicy: {
        commandDenyList: ['string'],
        mcpDisabled: true,
        scmToolsAllowedGroupId: 'scmToolsAllowedGroupId',
        scmToolsDisabled: true,
      },
      allowedEditorIds: ['string'],
      allowLocalRunners: true,
      defaultEditorId: 'defaultEditorId',
      defaultEnvironmentImage: 'defaultEnvironmentImage',
      deleteArchivedEnvironmentsAfter: '+9125115.360s',
      editorVersionRestrictions: { foo: { allowedVersions: ['string'] } },
      maximumEnvironmentLifetime: '+9125115.360s',
      maximumEnvironmentsPerUser: '20',
      maximumEnvironmentTimeout: '3600s',
      maximumRunningEnvironmentsPerUser: '5',
      membersCreateProjects: true,
      membersRequireProjects: true,
      portSharingDisabled: true,
      requireCustomDomainAccess: true,
      restrictAccountCreationToScim: true,
      securityAgentPolicy: {
        crowdstrike: {
          additionalOptions: { foo: 'string' },
          cidSecretId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          enabled: true,
          image: 'image',
          tags: 'tags',
        },
      },
    });
  });
});
