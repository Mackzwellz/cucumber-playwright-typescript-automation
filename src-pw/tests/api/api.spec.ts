import { expect, test } from '@playwright/test';

test.describe.parallel('API Testing', () => {
  const baseUrl = 'https://reqres.in/api';

  test('Simple API Test - Assert Response Status', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/3`);
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    expect(responseBody).not.toBeEmpty();
  });

  test('Simple API Test - Assert Invalid Endpoint', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/2sadsadsad`);
    expect(response.status()).toBe(404);
  });

  test('GET Request - Get User Detail', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/1`);
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    expect(responseBody.data.id).toBe(1);
    expect(responseBody.data.first_name).toBe('George');
    expect(responseBody.data.email).toBeTruthy();
  });

  test('POST Request - Create New User', async ({ request }) => {
    const newName = 'morpheus';
    const response = await request.post(`${baseUrl}/users/`, {
      data: {
        job: 'leader',
        name: newName
      }
    });
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(201);
    expect(responseBody.name).toBe(newName);
  });

  test('POST Request - Login', async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
      data: {
        email: 'eve.holt@reqres.in',
        // eslint-disable-next-line sonarjs/no-hardcoded-credentials
        password: 'cityslicka'
      }
    });
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    expect(responseBody.token).toBeTruthy();
  });

  test('POST Request - Login failed', async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
      data: {
        email: 'eve.holt@reqres.in'
      }
    });
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(400);
    expect(responseBody.error).toBe('Missing password');
  });

  test('PUT Request - Update user', async ({ request }) => {
    const response = await request.put(`${baseUrl}/users/2`, {
      data: {
        job: 'new job',
        name: 'new name'
      }
    });
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe('new name');
    expect(responseBody.job).toBe('new job');
    expect(responseBody.updatedAt).toBeTruthy();
  });

  test('DELETE Request - Delete user', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/users/2`);
    expect(response.status()).toBe(204);
  });
});
