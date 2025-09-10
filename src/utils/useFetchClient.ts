interface fetchOptions extends RequestInit {
  baseUrl?: string;
}

const DEFAULT_BASE_URL = "";

const request = async <T>(url: string, options: fetchOptions): Promise<T> => {
  const baseUrl = options.baseUrl || DEFAULT_BASE_URL;
  const response = await fetch(baseUrl + url, options);

  if (!response.ok) {
    throw new Error(
      `Error ${response.status}: ${response.statusText || response.text}`
    );
  }

  return response.json();
};

export const useFetchClient = () => {
  const get = async <T>(url: string, options: fetchOptions): Promise<T> => {
    return request<T>(url, { ...options, method: "GET" });
  };

  const post = async <T>(
    url: string,
    body: any,
    options: fetchOptions
  ): Promise<T> => {
    return request<T>(url, {
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
    return request<T>(url, {
      ...options,
      method: "PUT",
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
    return request<T>(url, { ...options, method: "DELETE" });
  };

  return {
    get,
    post,
    put,
    deleteReq,
  };
};
