export const responseOk = body =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(body)
  });

export const responseError = () =>
  Promise.resolve({ ok: false });

export const requestBodyOf = fetchSpy =>
  JSON.parse(fetchSpy.mock.calls[0][1].body);    