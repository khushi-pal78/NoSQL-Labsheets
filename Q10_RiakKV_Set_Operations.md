# Q10 — Set operations in a Riak-based application
Riak releases with configured Riak Data Types may support server-side sets. This Python example demonstrates application-level set logic, not a server-side CRDT set.
```python
user_a = {"music", "coding", "reading"}
user_b = {"music", "travel", "cooking"}
user_a.add("sports")
print("After adding:", sorted(user_a))
user_a.discard("reading")
print("After removing:", sorted(user_a))
print("Likes coding:", "coding" in user_a)
print("Common interests:", sorted(user_a.intersection(user_b)))
```
Example output:
```text
After adding: ['coding', 'music', 'reading', 'sports']
After removing: ['coding', 'music', 'sports']
Likes coding: True
Common interests: ['music']
```
`add` inserts, `discard` removes if present, `in` checks membership, and `intersection` finds common elements.
