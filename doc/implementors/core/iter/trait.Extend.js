(function() {var implementors = {};
implementors['openssl'] = ["impl&lt;K, V, S&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html' title='std::collections::hash::map::HashMap'>HashMap</a>&lt;K, V, S&gt;","impl&lt;T, S&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html' title='std::collections::hash::set::HashSet'>HashSet</a>&lt;T, S&gt;","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt;","impl&lt;V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_map/struct.VecMap.html' title='collections::vec_map::VecMap'>VecMap</a>&lt;V&gt;","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl&lt;P&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;P&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/std/sys_common/wtf8/struct.CodePoint.html' title='std::sys_common::wtf8::CodePoint'>CodePoint</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/sys_common/wtf8/struct.Wtf8Buf.html' title='std::sys_common::wtf8::Wtf8Buf'>Wtf8Buf</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a <a href='http://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bit/struct.BitVec.html' title='collections::bit::BitVec'>BitVec</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bit/struct.BitSet.html' title='collections::bit::BitSet'>BitSet</a>","impl&lt;K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt;","impl&lt;E&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;E&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;",];implementors['hyper'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bit/struct.BitVec.html' title='collections::bit::BitVec'>BitVec</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bit/struct.BitSet.html' title='collections::bit::BitSet'>BitSet</a>","impl&lt;K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt;","impl&lt;E&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;E&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt;","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a <a href='http://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_map/struct.VecMap.html' title='collections::vec_map::VecMap'>VecMap</a>&lt;V&gt;","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a class='struct' href='hyper/header/struct.HeaderView.html' title='hyper::header::HeaderView'>HeaderView</a>&lt;'a&gt;&gt; for <a class='struct' href='hyper/header/struct.Headers.html' title='hyper::header::Headers'>Headers</a>",];implementors['iron'] = ["impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt;","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bit/struct.BitVec.html' title='collections::bit::BitVec'>BitVec</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bit/struct.BitSet.html' title='collections::bit::BitSet'>BitSet</a>","impl&lt;K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt;","impl&lt;E&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;E&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt;","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a <a href='http://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_map/struct.VecMap.html' title='collections::vec_map::VecMap'>VecMap</a>&lt;V&gt;","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a class='struct' href='iron/headers/struct.HeaderView.html' title='iron::headers::HeaderView'>HeaderView</a>&lt;'a&gt;&gt; for <a class='struct' href='iron/struct.Headers.html' title='iron::Headers'>Headers</a>",];implementors['rustless'] = ["impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt;","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bit/struct.BitVec.html' title='collections::bit::BitVec'>BitVec</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bit/struct.BitSet.html' title='collections::bit::BitSet'>BitSet</a>","impl&lt;K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt;","impl&lt;E&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;E&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt;","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a <a href='http://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_map/struct.VecMap.html' title='collections::vec_map::VecMap'>VecMap</a>&lt;V&gt;","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a class='struct' href='rustless/server/header/struct.HeaderView.html' title='rustless::server::header::HeaderView'>HeaderView</a>&lt;'a&gt;&gt; for <a class='struct' href='rustless/server/header/struct.Headers.html' title='rustless::server::header::Headers'>Headers</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
