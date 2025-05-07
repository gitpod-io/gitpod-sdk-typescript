// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gitpod from '@gitpod/sdk';

const client = new Gitpod({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource organizations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.organizations.create({ name: 'Acme Corp Engineering' });
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
    const response = await client.organizations.create({
      name: 'Acme Corp Engineering',
      inviteAccountsWithMatchingDomain: true,
      joinOrganization: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.organizations.retrieve({
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
    const response = await client.organizations.retrieve({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.organizations.update({
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
    const response = await client.organizations.update({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      inviteDomains: { domains: ['sfN2.l.iJR-BU.u9JV9.a.m.o2D-4b-Jd.0Z-kX.L.n.S.f.UKbxB'] },
      name: 'name',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.organizations.delete({
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.organizations.delete({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('join', async () => {
    const responsePromise = client.organizations.join({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('leave: only required params', async () => {
    const responsePromise = client.organizations.leave({ userId: 'f53d2330-3795-4c5d-a1f3-453121af9c60' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('leave: required and optional params', async () => {
    const response = await client.organizations.leave({ userId: 'f53d2330-3795-4c5d-a1f3-453121af9c60' });
  });

  // skipped: tests are disabled for the time being
  test.skip('listMembers: only required params', async () => {
    const responsePromise = client.organizations.listMembers({
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
  test.skip('listMembers: required and optional params', async () => {
    const response = await client.organizations.listMembers({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      token: 'token',
      pageSize: 0,
      pagination: { token: 'token', pageSize: 20 },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('setRole: only required params', async () => {
    const responsePromise = client.organizations.setRole({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      userId: 'f53d2330-3795-4c5d-a1f3-453121af9c60',
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
  test.skip('setRole: required and optional params', async () => {
    const response = await client.organizations.setRole({
      organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
      userId: 'f53d2330-3795-4c5d-a1f3-453121af9c60',
      role: 'ORGANIZATION_ROLE_MEMBER',
    });
  });
});
