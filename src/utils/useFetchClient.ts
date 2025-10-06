interface fetchOptions extends RequestInit {
  baseUrl?: string;
}

const DEFAULT_BASE_URL = "";

/**
 * Generic request handler using Fetch API
 * @template T - Expected response type
 * @param url - API endpoint
 * @param options - Request options (method, headers, body, etc.)
 * @returns Parsed JSON response of type T
 */
const request = async <T>(
  url: string,
  options: fetchOptions = {}
): Promise<T> => {
  const baseUrl = url || DEFAULT_BASE_URL;
  const response = await fetch(baseUrl, options);

  if (!response.ok) {
    throw new Error(
      `Error ${response.status}: ${response.statusText || response.text}`
    );
  }

  return response.json();
};

export const useFetchClient = () => {
  /**
   * GET request → Fetches data from the server.
   * Example: get<User[]>('/api/users')
   */
  const get = async <T>(url: string, options: fetchOptions): Promise<T> => {
    return await request<T>(url, { ...options, method: "GET" });
  };

  /**
   * POST request → Sends new data to the server (creates a resource).
   * Example: post<User>('/api/users', { name: "John" })
   */
  const post = async <T>(
    url: string,
    body: any,
    options: fetchOptions
  ): Promise<T> => {
    return await request<T>(url, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
      body: JSON.stringify(body),
    });
  };

  /**
   * PUT request → Updates/replaces an existing resource entirely.
   * Example: put<User>('/api/users/1', { id: 1, name: "Jane" })
   */
  const put = async <T>(
    url: string,
    body: any,
    options: fetchOptions
  ): Promise<T> => {
    return await request<T>(url, {
      ...options,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
      body: JSON.stringify(body),
    });
  };

  /**
   * PATCH request → Partially updates an existing resource.
   * Example: patch<User>('/api/users/1', { name: "Jane" })
   */
  const patch = async <T>(
    url: string,
    body: any,
    options: fetchOptions
  ): Promise<T> => {
    return await request<T>(url, {
      ...options,
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
      body: JSON.stringify(body),
    });
  };

  /**
   * DELETE request → Removes a resource from the server.
   * Example: deleteReq<void>('/api/users/1')
   */
  const deleteReq = async <T>(
    url: string,
    options: fetchOptions
  ): Promise<T> => {
    return await request<T>(url, { ...options, method: "DELETE" });
  };

  return {
    get,
    post,
    put,
    patch,
    deleteReq,
  };
};
