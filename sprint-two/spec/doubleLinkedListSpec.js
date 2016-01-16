describe('doubledoubleLinkedList', function() {
  var doubleLinkedList;

  beforeEach(function() {
    doubleLinkedList = DoubleLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doubleLinkedList).to.have.property("head");
    expect(doubleLinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "addToHead", "removeTail" "removeHead", "containsFromTail", and "containsFromHead"', function() {
    expect(doubleLinkedList.addToTail).to.be.a("function");
    expect(doubleLinkedList.addToHead).to.be.a("function");
    expect(doubleLinkedList.removeTail).to.be.a("function");
    expect(doubleLinkedList.removeHead).to.be.a("function");
    expect(doubleLinkedList.containsFromTail).to.be.a("function");
    expect(doubleLinkedList.containsFromHead).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    doubleLinkedList.addToTail(4);
    expect(doubleLinkedList.tail.value).to.equal(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.head.value).to.equal(4);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    doubleLinkedList.addToTail(4);
    expect(doubleLinkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.contains(4)).to.equal(true);
    expect(doubleLinkedList.contains(5)).to.equal(true);
    expect(doubleLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.contains(4)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doubleLinkedList
});
