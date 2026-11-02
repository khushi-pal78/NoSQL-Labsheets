# Q1. Install and configure Apache HBase; create Student table

## Installation/configuration (recommended: Linux or WSL2 Ubuntu)
HBase is designed for Linux. For a student single-machine practical, use Ubuntu/WSL2 or a Linux VM. Install Java first, then download a compatible HBase binary from the Apache HBase downloads page. Extract it and configure `JAVA_HOME` and `HBASE_HOME`.

Example Ubuntu commands (use a HBase release compatible with your Java version):
```bash
sudo apt update
sudo apt install -y openjdk-11-jdk
java -version
# Download the binary tarball from https://hbase.apache.org/downloads.html
tar -xzf hbase-<version>-bin.tar.gz
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export HBASE_HOME=$HOME/hbase-<version>
export PATH=$PATH:$HBASE_HOME/bin
```
For a local standalone practice setup, configure `conf/hbase-site.xml` with a local data directory and standalone mode, following the documentation for the chosen release. Start and stop HBase with:
```bash
$HBASE_HOME/bin/start-hbase.sh
$HBASE_HOME/bin/hbase shell
# when finished, from a terminal:
$HBASE_HOME/bin/stop-hbase.sh
```
If using Windows, run HBase inside WSL2/Ubuntu or a Linux VM rather than treating native Windows as the standard production environment.

## HBase Shell commands
```ruby
create 'Student', 'personal', 'academic'

put 'Student', 'S101', 'personal:name', 'Aman'
put 'Student', 'S101', 'personal:city', 'Roorkee'
put 'Student', 'S101', 'academic:course', 'BCA'
put 'Student', 'S101', 'academic:marks', '88'

put 'Student', 'S102', 'personal:name', 'Riya'
put 'Student', 'S102', 'personal:city', 'Dehradun'
put 'Student', 'S102', 'academic:course', 'BCA'
put 'Student', 'S102', 'academic:marks', '91'

put 'Student', 'S103', 'personal:name', 'Neha'
put 'Student', 'S103', 'personal:city', 'Haridwar'
put 'Student', 'S103', 'academic:course', 'BCA'
put 'Student', 'S103', 'academic:marks', '85'

put 'Student', 'S104', 'personal:name', 'Rahul'
put 'Student', 'S104', 'personal:city', 'Delhi'
put 'Student', 'S104', 'academic:course', 'BCA'
put 'Student', 'S104', 'academic:marks', '79'

put 'Student', 'S105', 'personal:name', 'Priya'
put 'Student', 'S105', 'personal:city', 'Meerut'
put 'Student', 'S105', 'academic:course', 'BCA'
put 'Student', 'S105', 'academic:marks', '94'

scan 'Student'
get 'Student', 'S103'
describe 'Student'
```
Each row key identifies one student. `personal` and `academic` are column families; `name`, `city`, `course`, and `marks` are qualifiers.
