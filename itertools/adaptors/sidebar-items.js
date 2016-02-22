initSidebarItems({"struct":[["Batching","A “meta iterator adaptor”. Its closure recives a reference to the iterator and may pick off as many elements as it likes, to produce the next iterator element.Iterator element type is *X*, if the return type of `F` is *Option<X>*.See *.batching()* for more information."],["Coalesce","An iterator adaptor that may join together adjacent elements.See *.coalesce()* for more information."],["Combinations","An iterator to iterate through all the combinations of pairs in a `Clone`-able iterator.See *.combinations()* for more information."],["CombinationsN","An iterator to iterate through all the `n`-length combinations in an iterator.See *.combinations_n()* for more information."],["Dedup","An iterator adaptor that removes repeated duplicates.See *.dedup()* for more information."],["Flatten","An iterator adapter to simply flatten a structure.See *.flatten()* for more information."],["GroupBy","An iterator adaptor that groups iterator elements. Consecutive elements that map to the same key (“runs”), are returned as the iterator elements.See *.group_by()* for more information."],["Interleave","An iterator adaptor that alternates elements from two iterators until both run out.This iterator is *fused*.See *.interleave()* for more information."],["InterleaveShortest","An iterator adaptor that alternates elements from the two iterators until one of them runs out.This iterator is *fused*.See *.interleave_shortest()* for more information."],["KMerge","An iterator adaptor that merges an abitrary number of base iterators in ascending order. If all base iterators are sorted (ascending), the result is sorted.Iterator element type is `I::Item`.See *.kmerge()* for more information."],["MendSlices","An iterator adaptor that glues together adjacent contiguous slices.See *.mend_slices()* for more information."],["Merge","An iterator adaptor that merges the two base iterators in ascending order. If both base iterators are sorted (ascending), the result is sorted.Iterator element type is `I::Item`.See *.merge()* for more information."],["MergeBy","An iterator adaptor that merges the two base iterators in ascending order. If both base iterators are sorted (ascending), the result is sorted.Iterator element type is `I::Item`.See *.merge_by()* for more information."],["MultiPeek","An iterator adaptor that allows the user to peek at multiple *.next()* values without advancing itself.See *.multipeek()* for more information."],["Product","An iterator adaptor that iterates over the cartesian product of the element sets of two iterators `I` and `J`.Iterator element type is `(I::Item, J::Item)`.See *.cartesian_product()* for more information."],["PutBack","An iterator adaptor that allows putting back a single item to the front of the iterator.Iterator element type is `I::Item`."],["PutBackN","An iterator adaptor that allows putting multiple items in front of the iterator.Iterator element type is `I::Item`."],["Step","An iterator adaptor that steps a number elements in the base iterator for each iteration.The iterator steps by yielding the next element from the base iterator, then skipping forward *n-1* elements.See *.step()* for more information."],["TakeWhileRef","An iterator adaptor that borrows from a `Clone`-able iterator to only pick off elements while the predicate returns `true`.See *.take_while_ref()* for more information."],["Unique","An iterator adapter to filter out duplicate elements.See *.unique()* for more information."],["UniqueBy","An iterator adapter to filter out duplicate elements.See *.unique_by()* for more information."],["WhileSome","An iterator adaptor that filters `Option<A>` iterator elements and produces `A`. Stops on the first `None` encountered.See *.while_some()* for more information."]]});