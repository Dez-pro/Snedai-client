export const API_BASE_URL = "https://snedai-backend.onrender.com";

function buildHeaders(initHeaders = {}) {
  const headers = new Headers(initHeaders);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  const token = localStorage.getItem("token");
  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  return headers;
}

export async function apiFetch(path, options = {}) {
  const url = path.startsWith("http") ? path : `${API_BASE_URL}${path}`;
  const { headers: initHeaders, body, ...rest } = options;

  const headers = buildHeaders(initHeaders);

  const finalBody = body && typeof body === "object" && !(body instanceof FormData)
    ? JSON.stringify(body)
    : body;

  const response = await fetch(url, { headers, body: finalBody, ...rest });
  let data;
  try {
    data = await response.json();
  // eslint-disable-next-line no-unused-vars
  } catch (_) {
    data = null;
  }
  if (!response.ok) {
    const message = (data && (data.message || data.error)) || `HTTP ${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    error.payload = data;
    throw error;
  }
  return data;
}

export const api = {
  get: (path, options = {}) => apiFetch(path, { method: "GET", ...options }),
  post: (path, body, options = {}) => apiFetch(path, { method: "POST", body, ...options }),
  put: (path, body, options = {}) => apiFetch(path, { method: "PUT", body, ...options }),
  patch: (path, body, options = {}) => apiFetch(path, { method: "PATCH", body, ...options }),
  delete: (path, options = {}) => apiFetch(path, { method: "DELETE", ...options }),
};


