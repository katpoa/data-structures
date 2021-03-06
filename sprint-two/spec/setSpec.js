describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  /////
  it('should handle a set of numeric values', function() {
    set.add(1);
    set.add(2);
    set.add(3);
    expect(set.contains(2)).to.equal(true);
  });

  it('should handle diverse types of input objects', function() {
    set.add([1, 2, 3]);
    expect(set.contains('1,2,3')).to.equal(true);
  });

  it('should overwrite values with same key', function() {
    set.add(1);
    set.add(1);
    set.add(1);
    expect(set.size()).to.equal(1);
  });

});
