#!/usr/bin/python3
""" FIFO caching
"""
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """FIFO caching
    """

    def __init__(self):
        """ Initialize
        """
        super().__init__()

    def put(self, key, item):
        """ Discarding the frist element of a cache
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item
        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            first_key = next(iter(self.cache_data))
        print("DISCARD: {}".format(first_key))
        del self.cache_data[first_key]

    def get(self, key):
        """ Get a value of a key in the cache
        """
        if key not in self.cache_data | key is None:
            return None
        return self.cache_data[key]
