interface fetchOptions extends RequestInit {
  baseUrl?: string;
}

const DEFAULT_BASE_URL = "";

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
  const get = async <T>(url: string, options: fetchOptions): Promise<T> => {
    return await request<T>(url, { ...options, method: "GET" });
  };

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
