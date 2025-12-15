// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gitpod from '@gitpod/sdk';

const client = new Gitpod({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prebuilds', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.prebuilds.create({
      projectId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      spec: {},
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
    const response = await client.prebuilds.create({
      projectId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      spec: { desiredPhase: 'PREBUILD_PHASE_UNSPECIFIED', specVersion: 'specVersion', timeout: '3600s' },
      environmentClassId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.prebuilds.retrieve({ prebuildId: '07e03a28-65a5-4d98-b532-8ea67b188048' });
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
    const response = await client.prebuilds.retrieve({ prebuildId: '07e03a28-65a5-4d98-b532-8ea67b188048' });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.prebuilds.list({});
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
    const responsePromise = client.prebuilds.delete({ prebuildId: '07e03a28-65a5-4d98-b532-8ea67b188048' });
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
    const response = await client.prebuilds.delete({ prebuildId: '07e03a28-65a5-4d98-b532-8ea67b188048' });
  });

  // Prism tests are disabled
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.prebuilds.cancel({ prebuildId: '07e03a28-65a5-4d98-b532-8ea67b188048' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancel: required and optional params', async () => {
    const response = await client.prebuilds.cancel({ prebuildId: '07e03a28-65a5-4d98-b532-8ea67b188048' });
  });

  // Prism tests are disabled
  test.skip('createLogsToken: only required params', async () => {
    const responsePromise = client.prebuilds.createLogsToken({
      prebuildId: '07e03a28-65a5-4d98-b532-8ea67b188048',
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
  test.skip('createLogsToken: required and optional params', async () => {
    const response = await client.prebuilds.createLogsToken({
      prebuildId: '07e03a28-65a5-4d98-b532-8ea67b188048',
    });
  });
});
