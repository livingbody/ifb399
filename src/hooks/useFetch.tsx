import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState< boolean | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setData(null)
    setError(null)
    const source = axios.CancelToken.source()
    axios.get(url, { cancelToken: source.token })
      .then(res => {
        setLoading(false)
        //checking for multiple responses for more flexibility
        //with the url we send in.
        res.data.content && setData(res.data.content)
      })
      .catch(err => {
        setLoading(false)
        setError('An error occurred. Awkward..')
      })
    return () => {
      source.cancel()
    }
  }, [url])

  return { data, loading, error }
}
export default useFetch