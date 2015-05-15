describe('ImmutableFilter:', function(){
  var immutableFilter, mutableFilter, emptyImmutableArray;

  beforeEach( function() {

    module('mutable');
    module('immutable');

    inject(function(_immutableFilter_, _mutableFilter_){
      immutableFilter = _immutableFilter_;
      mutableFilter = _mutableFilter_;
    })
    emptyImmutableArray = Immutable.List()

  });

  it("is defined", function(){
    expect(immutableFilter).toBeDefined()
    expect(mutableFilter).toBeDefined()
  });

  it("immutableFilter returns a mutable datastructure", function(){
    expect(immutableFilter(emptyImmutableArray)).toEqual([]);
  })

  it("immutableFilter returns a mutable datastructure", function(){
    expect(mutableFilter(emptyImmutableArray)).toEqual([]);
  })

  it("immutableFilter does not return a memoized entry", function(){
    var james = "James"
    expect(james).toBe(james);
    expect([]).not.toBe([]);
    var emptyMutableArray = immutableFilter(emptyImmutableArray);
    expect(emptyMutableArray).not.toBe(immutableFilter(emptyImmutableArray));
  })

  it("mutableFilter returns a memoized entry", function(){
    var emptyMutableArray = mutableFilter(emptyImmutableArray);
    expect(emptyMutableArray).toBe(mutableFilter(emptyImmutableArray));
  })
});
