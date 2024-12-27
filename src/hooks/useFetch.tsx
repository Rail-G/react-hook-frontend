import { useEffect, useState, useRef } from 'react';

export function useJsonFetch<T>({ url, opts = { method: 'GET' }, updateOpts = { update: false } }: HookParam): [T | null, boolean, boolean] {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const optsRef = useRef(opts);
    const updateOptsRef = useRef(updateOpts);

    useEffect(() => {
        optsRef.current = opts;
        updateOptsRef.current = updateOpts;
    }, [opts, updateOpts]);

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                setLoading(true);
                const request = await fetch(url, {
                    method: optsRef.current.method,
                    ...(optsRef.current.method === "GET" || optsRef.current.method === 'DELETE' ? {} : { body: JSON.stringify(optsRef.current.body) }),
                    ...(optsRef.current.method === "GET" || optsRef.current.method === 'DELETE' ? {} : { headers: { ...optsRef.current.headers } }),
                });

                if (!request.ok) {
                    throw new Error(request.statusText);
                }
                const response = await request.json();
                setData(response);
                setError(false);

            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false);
                if (updateOptsRef.current.update) {
                    updateOptsRef.current.setUpdate?.(false);
                }
            }
        };
        fetchRequest();
    }, [url, opts.method, updateOpts.update]); 

    return [data, loading, error];
}