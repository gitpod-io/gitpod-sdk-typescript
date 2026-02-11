// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gitpod from '@gitpod/sdk';

const client = new Gitpod({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scimConfigurations', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.organizations.scimConfigurations.create({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.organizations.scimConfigurations.create({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      ssoConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
      name: 'name',
      tokenExpiresIn: '+9125115.360s',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.organizations.scimConfigurations.retrieve({
      scimConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
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
    const response = await client.organizations.scimConfigurations.retrieve({
      scimConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.organizations.scimConfigurations.update({
      scimConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
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
    const response = await client.organizations.scimConfigurations.update({
      scimConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
      enabled: false,
      name: 'name',
      ssoConfigurationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.organizations.scimConfigurations.list({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.organizations.scimConfigurations.delete({
      scimConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.organizations.scimConfigurations.delete({
      scimConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
    });
  });

  // Prism tests are disabled
  test.skip('regenerateToken: only required params', async () => {
    const responsePromise = client.organizations.scimConfigurations.regenerateToken({
      scimConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
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
  test.skip('regenerateToken: required and optional params', async () => {
    const response = await client.organizations.scimConfigurations.regenerateToken({
      scimConfigurationId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
      tokenExpiresIn: '+9125115.360s',
    });
  });
});
