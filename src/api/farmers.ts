import { fetchJson } from '.'
import { Farmer } from 'types/farmers'

const BASE_URL = 'http://localhost:3001'

export async function getFarmers(): Promise<Farmer[]> {
  return fetchJson<Farmer[]>(`${BASE_URL}/farmers`)
}
