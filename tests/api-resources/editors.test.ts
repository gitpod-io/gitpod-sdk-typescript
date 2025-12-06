// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gitpod from '@gitpod/sdk';

const client = new Gitpod({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource editors', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.editors.retrieve({ id: 'd2c94c27-3b76-4a42-b88c-95a85e392c68' });
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
    const response = await client.editors.retrieve({ id: 'd2c94c27-3b76-4a42-b88c-95a85e392c68' });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.editors.list({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('resolveURL: only required params', async () => {
    const responsePromise = client.editors.resolveURL({
      editorId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
      environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
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
  test.skip('resolveURL: required and optional params', async () => {
    const response = await client.editors.resolveURL({
      editorId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
      environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
    });
  });
});
