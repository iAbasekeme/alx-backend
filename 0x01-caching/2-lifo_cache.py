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
    """ Discarding the frist element of a cache
    """
    if key is None or item is None:
      return
    self.cache_data[key] = item
    if len(self.cache_data) > self.MAX_ITEMS:
      last_key = list(self.cache_data.keys())[-1]
      print("DISCARD:", last_key)
      del self.cache_data[last_key]

  def get(self, key):
    """ Get a value of a key in the cache
    """
    if key not in self.cache_data | key is None:
      return None
    return self.cache_data[key]
