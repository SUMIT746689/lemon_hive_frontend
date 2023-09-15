import axios from "axios";
import { FC, useEffect, useState } from "react";

type FetchApiProps = {
  method?: "post";
  url: string;
  query: string;
}

function useFetch({ method = "post", url, query }: { method?: "post", url: string, query: string }): { isLoading: boolean, datas: null | unknown, error: null | string, } {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [datas, setDatas] = useState<null | unknown>(null);
  const [error, setError] = useState<null | string>(null);

  const fetchData = async () => {
    try {
      const headers = {
        'content-type': 'application/json',
      };
      const requestBody = {
        query: `query {
          conferences {
            id
            name
          }
        }
        `
      }
      const options = {
        method: method,
        url: url,
        headers,
        data: requestBody
      };
      const response = await axios(options);
      setDatas(() => response?.data?.data )
    }
    catch (err: any) {
      console.log({ err: err?.response?.data?.errors[0]?.message })
      setError(err?.response?.data?.errors[0]?.message);
    }
    finally {
      setIsloading(false)
    }
  }

  useEffect(() => {
    setIsloading(true);
    fetchData();
  }, [])


  return ({ isLoading, datas, error }) as const
}

export default useFetch;