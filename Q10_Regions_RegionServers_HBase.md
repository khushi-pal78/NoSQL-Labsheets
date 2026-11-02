# Q10. Multiple regions and RegionServers

## Create a table with pre-split regions
In HBase Shell, use split keys to create initial region boundaries. The following creates three regions:
```ruby
create 'Sales', 'info', {SPLITS => ['m', 't']}
```
The resulting key ranges are approximately:
- Region 1: row keys less than `m`
- Region 2: `m` through keys less than `t`
- Region 3: `t` and above

## Insert records in different key ranges
```ruby
put 'Sales', 'a001', 'info:city', 'Delhi'
put 'Sales', 'b002', 'info:amount', '500'
put 'Sales', 'n003', 'info:city', 'Roorkee'
put 'Sales', 'p004', 'info:amount', '900'
put 'Sales', 'z005', 'info:city', 'Dehradun'
scan 'Sales'
```

## Inspect regions (run from HBase shell)
```ruby
list
describe 'Sales'
```
For detailed region-to-RegionServer assignment, use the HBase Master web UI (commonly port 16010) or the HBase admin tools appropriate to your release. Region assignment can change as HBase balances or splits regions, so do not assume a permanent RegionServer mapping.

## Explanation
- A region is a horizontal partition of a table's row-key range.
- HBase splits large regions and assigns regions to RegionServers.
- RegionServers serve reads/writes for their assigned regions.
- Multiple RegionServers distribute load and storage; HBase can reassign regions after failures.
- A real multi-region/multi-RegionServer demonstration requires a distributed HBase cluster. A standalone local installation is not proof of distribution across servers.
