(function() {var implementors = {};
implementors['thread_scoped'] = ["impl&lt;'a, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='thread_scoped/struct.JoinGuard.html' title='thread_scoped::JoinGuard'>JoinGuard</a>&lt;'a, T&gt;",];implementors['libc'] = [];implementors['itertools'] = ["impl&lt;'a, K, I, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='itertools/struct.Group.html' title='itertools::Group'>Group</a>&lt;'a, K, I, F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: 'a</span>","impl&lt;'a, I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='itertools/struct.Chunk.html' title='itertools::Chunk'>Chunk</a>&lt;'a, I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: 'a</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
