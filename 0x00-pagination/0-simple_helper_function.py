#!/usr/bin/env python3
'''A module that calculates pagination
'''


def index_range(page, page_size):
    '''A method that calculates pagination for an api
    '''
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
