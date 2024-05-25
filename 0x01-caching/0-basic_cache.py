#!/usr/bin/python3
""" Basic dictionary caching
"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
  """ Basecaching class that defines
    - a dictionary caching system
  """

  def __init__(self):
    """ Initialize
    """
    super().__init__()

  def put(self, key, item):
    """ Assigning to a dictionary
    """
    if key is None or item is None:
      return
    self.cache_data[key] = item

  def get(self, key):
    if key is None:
      return None
    return self.cache_data.get(key)
