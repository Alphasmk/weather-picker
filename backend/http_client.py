from aiohttp import ClientSession
from async_lru import alru_cache

class HTTPClient:
    def __init__(self, base_url: str, api_key: str):
        self._session = ClientSession(
            base_url=base_url,
            headers={
                'key': api_key,
            }
        )

class WTHHTTpClient(HTTPClient):
    @alru_cache
    async def get_weather(self, city_name: str):
        async with self._session.get("/v1/current.json", params={"q": city_name, "lang": "ru"}) as resp:
            result = await resp.json()
            return result