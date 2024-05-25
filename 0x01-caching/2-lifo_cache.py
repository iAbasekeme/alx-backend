#!/usr/bin/python3
""" LIFO caching
"""
from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """ LIFO caching
    """

    def __init__(self):
        """ Initialize
        """
        super().__init__()

    def put(self, key, item):
        """Adds an item in the cache.
        """
        if key is None or item is None:
            return
        if key not in self.cache_data:
            if len(self.cache_data) + 1 > BaseCaching.MAX_ITEMS:
                last_key, _ = self.cache_data.popitem(True)
                print("DISCARD:", last_key)
        self.cache_data[key] = item
        self.cache_data.move_to_end(key, last=True)

    def get(self, key):
        """ Get a value of a key in the cache
        """
        if key not in self.cache_data | key is None:
            return None
        return self.cache_data[key]
