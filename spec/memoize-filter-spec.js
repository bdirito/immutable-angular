describe('ImmutableFilter:', function(){
  var memoizeFilter, mutableFilter, emptyImmutableArray;

  beforeEach( function() {

    module('mutable');

    inject(function(_memoizeFilter_, _mutableFilter_){
      memoizeFilter = _memoizeFilter_;
      mutableFilter = _mutableFilter_;
    })
    emptyImmutableArray = Immutable.List();
    emptyCopy = emptyImmutableArray;

  });

  it("is defined", function(){
    expect(memoizeFilter).toBeDefined()
    expect(mutableFilter).toBeDefined()
  });

  it("memoizeFilter does not change inputted datastructure", function(){
    var result = memoizeFilter(emptyImmutableArray);
    expect(memoizeFilter(emptyImmutableArray)).toEqual(emptyImmutableArray);
    expect(memoizeFilter(emptyCopy)).toEqual(emptyImmutableArray);
    expect(memoizeFilter(emptyImmutableArray)).toEqual(emptyCopy);
    expect(result).toEqual(memoizeFilter(emptyImmutableArray));
  })

  it("memoizeFilter will return new data if input changes", function(){
    expect(memoizeFilter(emptyImmutableArray.push("HEYYY"))).not.toEqual(emptyImmutableArray);
  })

});
