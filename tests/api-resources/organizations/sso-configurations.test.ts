// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gitpod from '@gitpod/sdk';

const client = new Gitpod({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ssoConfigurations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.organizations.ssoConfigurations.create({
      clientId: '012345678-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com',
      clientSecret: 'GOCSPX-abcdefghijklmnopqrstuvwxyz123456',
      emailDomain: 'acme-corp.com',
      issuerUrl: 'https://accounts.google.com',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.organizations.ssoConfigurations.create({
      clientId: '012345678-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com',
      clientSecret: 'GOCSPX-abcdefghijklmnopqrstuvwxyz123456',
      emailDomain: 'acme-corp.com',
      issuerUrl: 'https://accounts.google.com',
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.organizations.ssoConfigurations.retrieve({
      ssoConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
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
    const response = await client.organizations.ssoConfigurations.retrieve({
      ssoConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.organizations.ssoConfigurations.update({
      ssoConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
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
    const response = await client.organizations.ssoConfigurations.update({
      ssoConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
      claims: { foo: 'string' },
      clientId: 'new-client-id',
      clientSecret: 'new-client-secret',
      emailDomain: 'xxxx',
      issuerUrl: 'https://example.com',
      state: 'SSO_CONFIGURATION_STATE_UNSPECIFIED',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.organizations.ssoConfigurations.list({
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
  test.skip('list: required and optional params', async () => {
    const response = await client.organizations.ssoConfigurations.list({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      token: 'token',
      pageSize: 0,
      pagination: { token: 'token', pageSize: 20 },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.organizations.ssoConfigurations.delete({
      ssoConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.organizations.ssoConfigurations.delete({
      ssoConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
    });
  });
});
