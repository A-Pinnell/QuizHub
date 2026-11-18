(function (root) {
	"use strict";

	root.questionBankQuick = {
		CloudComp: {
			quiz3: [
				{
					q: "What is a SOC's purpose?",
					a: [
						"Monitor and analyze threats",
						"Manage software releases",
						"Control employee access",
						"Optimize network performance",
					],
					c: 0,
				},
				{
					q: "What are the three SOC pillars?",
					a: [
						"People, process, technology",
						"Hardware, software, networks",
						"Monitoring, encryption, authentication",
						"Prevention, detection, compliance",
					],
					c: 0,
				},
				{
					q: "What does an L1 analyst do?",
					a: [
						"Monitor alerts and create tickets",
						"Investigate complex threats",
						"Contain and recover incidents",
						"Manage SOC operations",
					],
					c: 0,
				},
				{
					q: "What does an L2 analyst do?",
					a: [
						"Investigate events and recommend containment",
						"Validate alerts and create tickets",
						"Lead advanced threat hunting",
						"Manage budgets and policies",
					],
					c: 0,
				},
				{
					q: "What distinguishes an L3 analyst?",
					a: [
						"Investigate complex threats and hunt",
						"Monitor alerts and assign tickets",
						"Handle routine investigations",
						"Manage shifts and agreements",
					],
					c: 0,
				},
				{
					q: "What does an IR team handle?",
					a: [
						"Contain, remove, and recover threats",
						"Monitor alerts and create tickets",
						"Normalize logs and build dashboards",
						"Gather intelligence and audit compliance",
					],
					c: 0,
				},
				{
					q: "What is an in-house SOC's advantage?",
					a: [
						"Full control and internal knowledge",
						"Lower staffing costs",
						"External 24/7 coverage",
						"Outsourced analysts and infrastructure",
					],
					c: 0,
				},
				{
					q: "What is an MSSP's main benefit?",
					a: [
						"24/7 external security coverage",
						"Own all SOC resources",
						"No SLAs or oversight",
						"Retain all internal knowledge",
					],
					c: 0,
				},
				{
					q: "What defines a hybrid SOC?",
					a: [
						"Internal staff with MSSP support",
						"Fully outsourced operations",
						"Fully internal operations",
						"Uncoordinated separate teams",
					],
					c: 0,
				},
				{
					q: "What defines the Initial SOC stage?",
					a: [
						"Reactive monitoring and limited tools",
						"Standard playbooks and metrics",
						"Data-driven tuning and SLAs",
						"Proactive hunting and automation",
					],
					c: 0,
				},
				{
					q: "What defines the Managed SOC stage?",
					a: [
						"Defined processes and basic SIEM",
						"Reactive monitoring and limited tools",
						"Advanced hunting and automation",
						"Data-driven optimization and tuning",
					],
					c: 0,
				},
				{
					q: "What defines the Defined SOC stage?",
					a: [
						"Standard playbooks, metrics, improvement",
						"Basic SIEM and reactive monitoring",
						"Automated containment and hunting",
						"Quantitative SLA optimization",
					],
					c: 0,
				},
				{
					q: "What defines a Quantitatively Managed SOC?",
					a: [
						"Use data and SLAs to improve",
						"Start monitoring and ticket workflows",
						"Standardize investigations and metrics",
						"Fully automate threat response",
					],
					c: 0,
				},
				{
					q: "What defines the Optimizing SOC stage?",
					a: [
						"Hunting, automation, proactive detection",
						"Reactive monitoring and limited tools",
						"Basic SIEM and ticket workflows",
						"Playbooks and basic metrics",
					],
					c: 0,
				},
				{
					q: "Why are ephemeral workloads challenging?",
					a: [
						"Workloads vanish within seconds",
						"Require permanent physical servers",
						"Cannot generate security telemetry",
						"Encrypt logs before collection",
					],
					c: 0,
				},
				{
					q: "How does identity explosion affect security?",
					a: [
						"More identities expand attack surfaces",
						"Fewer logins hinder identification",
						"Removing machine IDs disrupts automation",
						"Central accounts block audit logs",
					],
					c: 0,
				},
				{
					q: "Why is cloud log volume costly?",
					a: [
						"More telemetry increases storage costs",
						"Cloud services limit log generation",
						"Require physical logging appliances",
						"Historical logs are automatically deleted",
					],
					c: 0,
				},
				{
					q: "Why is multi-cloud visibility difficult?",
					a: [
						"Different log formats and APIs",
						"Providers block network monitoring",
						"Identical telemetry across clouds",
						"Identical infrastructure requirements",
					],
					c: 0,
				},
				{
					q: "What happens when shared responsibility is misunderstood?",
					a: [
						"Control gaps create blind spots",
						"Providers secure every customer setting",
						"Customers maintain data-center hardware",
						"Multi-cloud removes security duties",
					],
					c: 0,
				},
				{
					q: "What does SIEM stand for?",
					a: [
						"Security Information and Event Management",
						"Security Integration and Endpoint Monitoring",
						"System Information and Encryption Management",
						"Security Intelligence and Enterprise Maintenance",
					],
					c: 0,
				},
				{
					q: "What is SIEM's main function?",
					a: [
						"Collect, normalize, and analyze events",
						"Encrypt data and manage access",
						"Deploy software and update apps",
						"Replace incident response analysts",
					],
					c: 0,
				},
				{
					q: "Why does SIEM collect logs?",
					a: [
						"Gather security data from sources",
						"Standardize event formats",
						"Link events to find incidents",
						"Create alerts and dashboards",
					],
					c: 0,
				},
				{
					q: "What happens during SIEM normalization?",
					a: [
						"Map logs to a common format",
						"Link events into incident patterns",
						"Display and prioritize alerts",
						"Collect events from systems",
					],
					c: 0,
				},
				{
					q: "Why does SIEM use correlation?",
					a: [
						"Link events to find incidents",
						"Standardize log formats",
						"Collect system telemetry",
						"Display dashboards and reports",
					],
					c: 0,
				},
				{
					q: "What belongs in SIEM's data source layer?",
					a: [
						"Cloud APIs, endpoints, networks",
						"Rules, models, detection, risk scoring",
						"Agents, connectors, normalization, enrichment",
						"Dashboards, alerts, reports, hunting tools",
					],
					c: 0,
				},
				{
					q: "Why does SIEM enrich data?",
					a: [
						"Add context and threat intelligence",
						"Standardize events for analysis",
						"Delete reviewed historical events",
						"Isolate compromised endpoints",
					],
					c: 0,
				},
				{
					q: "What does UEBA detect?",
					a: [
						"Unusual user and entity behavior",
						"Incorrect cloud log formats",
						"Unencrypted network traffic",
						"Excessive log storage",
					],
					c: 0,
				},
				{
					q: "How does threat intelligence improve SIEM?",
					a: [
						"Add threat indicators and TTPs",
						"Replace rules with machine learning",
						"Stop suspicious cloud logins",
						"Remove the need for logs",
					],
					c: 0,
				},
				{
					q: "Why use SIEM forensic search?",
					a: [
						"Search historical logs quickly",
						"Contain systems before collecting evidence",
						"Turn alerts into compliance reports",
						"Create new user credentials",
					],
					c: 0,
				},
				{
					q: "How does cloud-native SIEM differ?",
					a: [
						"Uses SaaS or serverless backends",
						"Requires physical appliances",
						"Scales through manual changes",
						"Needs connectors for every API",
					],
					c: 0,
				},
				{
					q: "What is consumption-based SIEM pricing's benefit?",
					a: [
						"Pay based on usage",
						"Unlimited ingestion at no cost",
						"No storage or analysis costs",
						"Fixed hardware installation fees",
					],
					c: 0,
				},
				{
					q: "What does impossible-travel detection identify?",
					a: [
						"Distant logins within short periods",
						"Repeated failures across accounts",
						"Unusual admin roles and APIs",
						"Large sensitive data transfers",
					],
					c: 0,
				},
				{
					q: "How can SIEM detect privilege escalation?",
					a: [
						"Correlate role changes and unusual APIs",
						"Track repeated login failures",
						"Detect large transfers and DNS tunneling",
						"Check storage against compliance rules",
					],
					c: 0,
				},
				{
					q: "What indicates cloud data exfiltration?",
					a: [
						"Large transfers or unusual downloads",
						"Repeated login failures",
						"Unexpected role changes",
						"Frequent policy updates",
					],
					c: 0,
				},
				{
					q: "What does brute force detection identify?",
					a: [
						"Repeated login failures across accounts",
						"Distant logins within short periods",
						"Large outbound data transfers",
						"Unusual privileged access",
					],
					c: 0,
				},
				{
					q: "What is Microsoft Sentinel associated with?",
					a: [
						"Azure, Microsoft 365, Entra ID, KQL",
						"Google Cloud, UDM, large-scale search",
						"Open-source tools and endpoint security",
						"OCSF data lakes and OpenSearch",
					],
					c: 0,
				},
				{
					q: "Which language does Splunk use?",
					a: ["SPL", "KQL", "UDM", "OCSF"],
					c: 0,
				},
				{
					q: "Which SIEM offers petabyte-scale Google Cloud search?",
					a: [
						"Google Chronicle",
						"Microsoft Sentinel",
						"Elastic Security",
						"AWS Security Lake + OpenSearch",
					],
					c: 0,
				},
				{
					q: "What does SOAR stand for?",
					a: [
						"Security Orchestration, Automation and Response",
						"SOC, Analysis and Recovery",
						"System Orchestration, Access and Reporting",
						"Security Optimization, Assessment and Remediation",
					],
					c: 0,
				},
				{
					q: "What is SOAR used for?",
					a: [
						"Automate incident response",
						"Collect and store events",
						"Manage endpoints",
						"Secure networks and identities",
					],
					c: 0,
				},
				{
					q: "What does SOAR orchestration do?",
					a: [
						"Connect tools into shared workflows",
						"Correlate events into alerts",
						"Standardize logs for analysis",
						"Detect unusual user behavior",
					],
					c: 0,
				},
				{
					q: "Why does SOAR use automation?",
					a: [
						"Automate enrichment and containment",
						"Standardize logs for analysis",
						"Create manual investigation steps",
						"Store logs and compliance evidence",
					],
					c: 0,
				},
				{
					q: "What does a SOAR playbook engine do?",
					a: [
						"Run automated incident workflows",
						"Collect and normalize events",
						"Display alert dashboards",
						"Store historical evidence",
					],
					c: 0,
				},
				{
					q: "Why does SOAR use integrations?",
					a: [
						"Connect SIEM, EDR, and cloud tools",
						"Standardize logs before analysis",
						"Replace all security tools",
						"Create cloud compliance policies",
					],
					c: 0,
				},
				{
					q: "Which is an automated SOAR action?",
					a: [
						"Isolate hosts or block IPs",
						"Standardize incoming logs",
						"Correlate login events",
						"Research attacker techniques",
					],
					c: 0,
				},
				{
					q: "Why does SOAR require human approval?",
					a: [
						"Approve high-impact actions",
						"Stop manual alert investigations",
						"Approve every routine action",
						"Replace playbooks with manual steps",
					],
					c: 0,
				},
				{
					q: "How do SIEM and SOAR differ?",
					a: [
						"SIEM detects threats and raises alerts",
						"SOAR automates incident response",
						"Manage user identities",
						"Report on compliance",
					],
					c: 0,
				},
				{
					q: "How does a playbook differ from a runbook?",
					a: [
						"Playbook: automated workflow",
						"Runbook: manual procedures",
						"Data lake: historical logs",
						"IAM: identity management",
					],
					c: 0,
				},
				{
					q: "What happens during enrichment?",
					a: [
						"Add context and threat intelligence",
						"Collect and correlate events",
						"Contain compromised resources",
						"Review incidents and improve rules",
					],
					c: 0,
				},
				{
					q: "What happens during the Decide stage?",
					a: [
						"Triage and prioritize alerts",
						"Collect and correlate events",
						"Contain and recover systems",
						"Improve rules and playbooks",
					],
					c: 0,
				},
				{
					q: "What is detection engineering?",
					a: [
						"Create and test detection rules",
						"Remove threats and restore systems",
						"Collect and retain logs",
						"Monitor alerts and manage tickets",
					],
					c: 0,
				},
				{
					q: "Why use threat modeling in detection engineering?",
					a: [
						"Identify relevant attacker techniques",
						"Standardize cloud log formats",
						"Plan historical log storage",
						"Deploy containment playbooks",
					],
					c: 0,
				},
				{
					q: "Why is data source mapping important?",
					a: [
						"Confirm required logs are collected",
						"Contain incidents before investigation",
						"Deploy rules without testing",
						"Standardize cloud access policies",
					],
					c: 0,
				},
				{
					q: "What happens during detection testing?",
					a: [
						"Simulate attacks and measure results",
						"Deploy rules without evaluation",
						"Delete logs after normalization",
						"Transfer security duties to providers",
					],
					c: 0,
				},
				{
					q: "What is hypothesis-driven threat hunting?",
					a: [
						"Start with a threat hypothesis",
						"Search known threat indicators",
						"Classify events with machine learning",
						"Monitor only confirmed incidents",
					],
					c: 0,
				},
				{
					q: "How does intelligence-driven hunting work?",
					a: [
						"Guide searches with threat intelligence",
						"Measure analyst workload and response time",
						"Automate workload containment",
						"Segment identities and cloud access",
					],
					c: 0,
				},
				{
					q: "Why is situational awareness useful?",
					a: [
						"Focus on known compromised accounts",
						"Replace log analysis with notifications",
						"Find only known malware signatures",
						"Measure automated response activity",
					],
					c: 0,
				},
				{
					q: "What belongs in IR preparation?",
					a: [
						"Prepare tools, access, and playbooks",
						"Remove threats and restore services",
						"Triage alerts and assess impact",
						"Isolate resources and block traffic",
					],
					c: 0,
				},
				{
					q: "What is incident containment's goal?",
					a: [
						"Isolate resources and revoke credentials",
						"Review gaps and improve procedures",
						"Prepare tools and communication plans",
						"Remove threats and restore services",
					],
					c: 0,
				},
				{
					q: "What happens during eradication and recovery?",
					a: [
						"Remove threats and restore clean systems",
						"Triage alerts and assess scope",
						"Isolate resources and block traffic",
						"Review lessons and update procedures",
					],
					c: 0,
				},
				{
					q: "What does MTTD measure?",
					a: [
						"Time from threat to detection",
						"Time from detection to containment",
						"Daily alert count",
						"Automated response percentage",
					],
					c: 0,
				},
				{
					q: "What does MTTR measure?",
					a: [
						"Time from detection to containment",
						"Time from threat to detection",
						"Share of genuine alerts",
						"Number of techniques detected",
					],
					c: 0,
				},
				{
					q: "What can high daily alert volume indicate?",
					a: [
						"Too many low-quality alerts",
						"Fewer detection events",
						"Fully automated incident response",
						"Complete detection coverage",
					],
					c: 0,
				},
				{
					q: "What does true positive rate measure?",
					a: [
						"Share of alerts that are real",
						"Share of automated responses",
						"Average detection time",
						"Share of ATT&CK techniques detected",
					],
					c: 0,
				},
				{
					q: "What does detection coverage measure?",
					a: [
						"Share of relevant ATT&CK techniques detected",
						"Share of automated responses",
						"Share of genuine alerts",
						"Share of compliant workloads",
					],
					c: 0,
				},
				{
					q: "What is alert fatigue?",
					a: [
						"Low-quality alerts hide real threats",
						"Too few detection events",
						"Manual reviews slow investigations",
						"Too many tools hinder log collection",
					],
					c: 0,
				},
				{
					q: "What is tool sprawl?",
					a: [
						"Too many overlapping tools",
						"Excessive telemetry storage",
						"Too few security analysts",
						"Rapid cloud changes",
					],
					c: 0,
				},
				{
					q: "Why are false positives harmful?",
					a: [
						"Poor rules waste time and trust",
						"Bad log formats block authentication",
						"Automation blocks forensic evidence",
						"Unusual behavior disables SIEM correlation",
					],
					c: 0,
				},
				{
					q: "What is Detection-as-Code's purpose?",
					a: [
						"Version and test detection rules",
						"Replace rules with manual procedures",
						"Collect every cloud log",
						"Move analytics to physical appliances",
					],
					c: 0,
				},
				{
					q: "Which cloud logs should SOCs prioritize?",
					a: [
						"Identity, control plane, data access",
						"Performance, storage, software updates",
						"Productivity, workstation, network use",
						"Hardware, uptime, database maintenance",
					],
					c: 0,
				},
				{
					q: "How does SOAR improve repetitive tasks?",
					a: [
						"Automate routine SOC tasks",
						"Replace monitoring with manual audits",
						"Store and normalize logs",
						"Block high-impact action approvals",
					],
					c: 0,
				},
				{
					q: "Why close the cloud SOC feedback loop?",
					a: [
						"Improve rules and playbooks",
						"Send records to providers",
						"Delete alerts without review",
						"Separate response from detection",
					],
					c: 0,
				},
				{
					q: "How should SOCs handle compromised IAM keys?",
					a: [
						"SIEM detects; SOAR disables key",
						"SOAR gathers logs; SIEM disables key",
						"SIEM updates policy; SOAR normalizes logs",
						"Identify owner and wait",
					],
					c: 0,
				},
				{
					q: "How should SOAR handle exposed storage buckets?",
					a: [
						"Verify alert and open ticket",
						"Collect and normalize storage logs",
						"Disable all identities and storage",
						"Investigate manually using a hypothesis",
					],
					c: 0,
				},
				{
					q: "How should SOCs handle cryptomining containers?",
					a: [
						"Correlate unusual CPU and network activity",
						"Normalize logs and create reports",
						"Disable all identities and credentials",
						"Collect logs and update policies",
					],
					c: 0,
				},
				{
					q: "How should SOCs detect OAuth abuse?",
					a: [
						"Link consent grants to unusual mailbox access",
						"Monitor CPU and container activity",
						"Track password failures and disable accounts",
						"Review storage permissions and normalize logs",
					],
					c: 0,
				},
				{
					q: "What does Zero Trust require?",
					a: [
						"Verify identity, device, and context",
						"Trust users after network login",
						"Require physical security appliances",
						"Trust users until incidents occur",
					],
					c: 0,
				},
				{
					q: "What does Assume Breach emphasize?",
					a: [
						"Assume attackers may already be inside",
						"Prevent every intrusion first",
						"Trust internal traffic",
						"Stop all workloads after suspicious logins",
					],
					c: 0,
				},
				{
					q: "How does SIEM and SOAR support least privilege?",
					a: [
						"Monitor privileges and revoke excess access",
						"Grant additional permissions",
						"Encrypt privileged accounts",
						"Manage network segmentation",
					],
					c: 0,
				},
				{
					q: "Why are micro-segmentation signals useful?",
					a: [
						"Add network and identity signals",
						"Replace identity monitoring with encryption",
						"Block cloud communication monitoring",
						"Turn traffic into compliance evidence",
					],
					c: 0,
				},
				{
					q: "How does generative AI improve SOCs?",
					a: [
						"Assist investigations and suggest playbooks",
						"Replace analysts and IR decisions",
						"Eliminate logs and monitoring",
						"Guarantee genuine alerts",
					],
					c: 0,
				},
				{
					q: "What does XDR convergence accomplish?",
					a: [
						"Unify endpoint, network, identity, and cloud data",
						"Separate endpoint, network, and identity tools",
						"Use separate stores for each tool",
						"Combine deployment and performance monitoring",
					],
					c: 0,
				},
				{
					q: "What is a security data lake's benefit?",
					a: [
						"Open formats enable flexible analytics",
						"Use proprietary storage formats",
						"Automatically delete historical logs",
						"Manually convert logs without integrations",
					],
					c: 0,
				},
				{
					q: "What does autonomous response involve?",
					a: [
						"Automate containment with safeguards",
						"Remove approval for every action",
						"Replace automation with manual steps",
						"Limit automation to low-priority events",
					],
					c: 0,
				},
				{
					q: "What does a cloud-native SOC prioritize?",
					a: [
						"Multi-cloud, identity, serverless security",
						"Physical appliances and isolated networks",
						"Manual logs and fixed infrastructure",
						"Endpoint-only monitoring",
					],
					c: 0,
				},
				{
					q: "How do SOC, SIEM, and SOAR work together?",
					a: [
						"SOC: people and process; SIEM: detection",
						"SOC: log storage; SIEM: containment",
						"SOC: cloud systems; SIEM: authentication",
						"SOC: automated detection; SIEM: scheduling",
					],
					c: 0,
				},
			],
			quiz4: [
				{
					q: "What is the main focus of this lecture?",
					a: [
						"Cloud networking",
						"Cloud databases and managed services",
						"Operating systems",
						"Cloud storage",
					],
					c: 1,
				},
				{
					q: "What is a benefit of managed cloud databases?",
					a: [
						"They eliminate all costs",
						"They require no applications",
						"They replace every database administrator",
						"They automate backups and maintenance",
					],
					c: 3,
				},
				{
					q: "Which database category supports flexible schemas?",
					a: [
						"Relational databases",
						"NoSQL databases",
						"Distributed file systems",
						"Traditional SQL databases",
					],
					c: 1,
				},
				{
					q: "What does atomicity guarantee in ACID?",
					a: [
						"Transactions execute quickly",
						"Data is permanently stored",
						"Transactions fully complete or roll back",
						"Only one user can access data",
					],
					c: 2,
				},
				{
					q: "What does vertical scaling involve?",
					a: [
						"Adding database servers",
						"Distributing data across regions",
						"Adding replicas",
						"Upgrading an existing server",
					],
					c: 3,
				},
				{
					q: "Which database type is commonly used for complex joins?",
					a: ["Key-value databases", "Relational databases", "Document databases", "Graph databases"],
					c: 1,
				},
				{
					q: "Which database type is commonly used for real-time leaderboards?",
					a: ["Relational databases", "Graph databases", "Key-value stores", "File systems"],
					c: 2,
				},
				{
					q: "What does NewSQL combine?",
					a: ["File storage and caching", "Documents and graph queries", "Local servers and backups", "SQL transactions and horizontal scalability"],
					c: 3,
				},
				{
					q: "What does partition tolerance mean in the CAP theorem?",
					a: ["The system operates during network partitions", "It prevents duplicate records", "It always returns newest data", "It increases storage automatically"],
					c: 0,
				},
				{
					q: "Which AWS service provides managed MySQL and PostgreSQL?",
					a: ["Amazon Neptune", "Amazon RDS", "Amazon DynamoDB", "Amazon Timestream"],
					c: 1,
				},
				{
					q: "Which AWS service provides a managed graph database?",
					a: ["Amazon RDS", "Amazon Aurora", "Amazon Neptune", "Amazon Keyspaces"],
					c: 2,
				},
				{
					q: "Which Azure service supports globally distributed multi-model databases?",
					a: ["Azure SQL Database", "Azure Cache for Redis", "Azure Synapse", "Azure Cosmos DB"],
					c: 3,
				},
				{
					q: "Which Google Cloud service provides a globally distributed relational database?",
					a: ["Cloud Spanner", "Cloud SQL", "Firestore", "Memorystore"],
					c: 0,
				},
				{
					q: "What is sharding used for?",
					a: ["Encrypting connections", "Creating backups", "Splitting data across nodes", "Reducing database users"],
					c: 2,
				},
				{
					q: "Which consistency model guarantees the latest committed write?",
					a: ["Eventual consistency", "Session consistency", "Bounded staleness", "Strong consistency"],
					c: 3,
				},
				{
					q: "What is the purpose of a Multi-AZ deployment?",
					a: ["Providing automatic failover", "Reducing storage costs", "Improving query complexity", "Replacing backups"],
					c: 0,
				},
				{
					q: "What should influence the choice of a cloud database?",
					a: ["Server brand", "Data model and access patterns", "Language popularity", "Available region count"],
					c: 1,
				},
				{
					q: "What does ACID stand for?",
					a: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integration, Distribution", "Availability, Consistency, Indexing, Deployment", "Atomicity, Connectivity, Isolation, Data"],
					c: 0,
				},
				{
					q: "What does SQL stand for?",
					a: ["Structured Query Language", "Standard Question Logic", "System Query Listing", "Sequential Query Language"],
					c: 0,
				},
				{
					q: "What does NoSQL generally mean?",
					a: ["Network Operating System Query Language", "Not Only SQL", "Non-Organized Storage Query Logic", "New Object Storage Language"],
					c: 1,
				},
			],
		},
		CompArch: {
			quiz4: [
				{
					q: "What is this lecture about?",
					a: ["Networking", "RISC", "Databases", "Operating systems"],
					c: 1,
				},
				{
					q: "What is a lecture objective?",
					a: ["Graphics", "Networking", "Register allocation", "Databases"],
					c: 2,
				},
				{
					q: "What did IBM System/360 introduce?",
					a: ["Computer families", "Microprocessors", "Cache", "RISC"],
					c: 0,
				},
				{
					q: "What does pipelining allow?",
					a: ["More storage", "Faster disks", "Compression", "Parallel stages"],
					c: 3,
				},
				{
					q: "What describes RISC?",
					a: [
						"Direct memory access",
						"Simple instructions",
						"Complex formats",
						"Microcode",
					],
					c: 1,
				},
				{
					q: "Which is a RISC architecture?",
					a: ["x86", "CISC-64", "RISC-V", "MS-DOS"],
					c: 2,
				},
				{
					q: "Why is RISC useful?",
					a: [
						"No compiler needed",
						"One-cycle instructions",
						"No cache needed",
						"Simpler pipelines",
					],
					c: 3,
				},
				{
					q: "Which instructions access data memory in RISC?",
					a: ["Load and store", "Arithmetic", "Branch", "All instructions"],
					c: 0,
				},
				{
					q: "Why was CISC developed?",
					a: [
						"Remove high-level languages",
						"Fewer addressing modes",
						"Support complex languages",
						"Remove hardware execution",
					],
					c: 2,
				},
				{
					q: "What do execution characteristics determine?",
					a: [
						"Case size",
						"Operations and sequencing",
						"Programming languages",
						"Disk capacity",
					],
					c: 1,
				},
				{
					q: "Which operation moves data?",
					a: ["Conditionals", "Returns", "Loops", "Assignments"],
					c: 3,
				},
				{
					q: "What affects procedure call time?",
					a: [
						"Parameters and nesting",
						"File count",
						"Cache size",
						"Variable names",
					],
					c: 0,
				},
				{
					q: "What is a local variable?",
					a: [
						"Shared variable",
						"Hardware variable",
						"Function variable",
						"Numeric variable",
					],
					c: 2,
				},
				{
					q: "What does a scalar variable hold?",
					a: [
						"Text only",
						"One value",
						"Multiple functions",
						"Different types",
					],
					c: 1,
				},
				{
					q: "What is temporal locality?",
					a: [
						"Nearby addresses",
						"Startup access",
						"Consecutive storage",
						"Repeated access",
					],
					c: 3,
				},
				{
					q: "What is spatial locality?",
					a: [
						"Nearby array elements",
						"Repeated variables",
						"Repeated functions",
						"Register access",
					],
					c: 0,
				},
				{
					q: "How does cache use temporal locality?",
					a: [
						"Permanent storage",
						"More RAM",
						"Keeps recent data",
						"Replaces registers",
					],
					c: 2,
				},
				{
					q: "Which nested procedure returns first?",
					a: ["A", "C", "B", "All together"],
					c: 1,
				},
				{
					q: "What should optimization focus on?",
					a: [
						"Every instruction",
						"Fewer registers",
						"No pipelines",
						"Frequent bottlenecks",
					],
					c: 3,
				},
				{
					q: "Why does RISC use many registers?",
					a: [
						"Fewer memory accesses",
						"Larger programs",
						"No decoding",
						"Store instructions",
					],
					c: 0,
				},
				{
					q: "Why store local variables in registers?",
					a: [
						"Share variables",
						"Remove procedures",
						"Reduce memory access",
						"Increase disk space",
					],
					c: 2,
				},
				{
					q: "What happens during procedure calls?",
					a: [
						"Registers clear",
						"Values may need saving",
						"ISA changes",
						"Variables enter cache",
					],
					c: 1,
				},
				{
					q: "Why use register windows?",
					a: [
						"More RAM",
						"Store instructions",
						"Remove variables",
						"Support procedure calls",
					],
					c: 3,
				},
				{
					q: "What are the three register window areas?",
					a: [
						"Parameter, local, temporary",
						"Cache, memory, instruction",
						"Input, output, control",
						"Global, branch, address",
					],
					c: 0,
				},
				{
					q: "Why overlap register windows?",
					a: [
						"Share processors",
						"Increase cache",
						"Pass parameters directly",
						"Store variables in RAM",
					],
					c: 2,
				},
				{
					q: "Which registers overlap?",
					a: [
						"Local and local",
						"Temporary and parameter",
						"Global and local",
						"Parameter and parameter",
					],
					c: 1,
				},
				{
					q: "What does CWP identify?",
					a: [
						"Oldest procedure",
						"Register count",
						"Next instruction",
						"Active window",
					],
					c: 3,
				},
				{
					q: "What happens when windows are full?",
					a: [
						"A window is saved to memory",
						"CPU stops",
						"Calls are cancelled",
						"Windows expand",
					],
					c: 0,
				},
				{
					q: "What does SWP track?",
					a: ["Current instruction", "CPU cores", "Saved window", "Cache size"],
					c: 2,
				},
				{
					q: "How do registers differ from cache?",
					a: [
						"Blocks vs. variables",
						"Compiler allocation vs. replacement",
						"Registers are slower",
						"Local variables vs. instructions",
					],
					c: 1,
				},
				{
					q: "What are symbolic registers?",
					a: [
						"Physical memory",
						"Completed instructions",
						"Clock controls",
						"Virtual register names",
					],
					c: 3,
				},
				{
					q: "What if physical registers run out?",
					a: [
						"Use memory",
						"Create more registers",
						"Remove instructions",
						"Switch to CISC",
					],
					c: 0,
				},
				{
					q: "Why is CISC harder to optimize?",
					a: [
						"Cannot run programs",
						"Needs multiple CPUs",
						"Complex instructions",
						"No memory addressing",
					],
					c: 2,
				},
				{
					q: "Why might CISC be slower?",
					a: [
						"No arithmetic",
						"Control overhead",
						"Disk access",
						"No registers",
					],
					c: 1,
				},
				{
					q: "Which describes RISC?",
					a: [
						"Complex addressing",
						"Variable formats",
						"Microcode-heavy",
						"Simple formats",
					],
					c: 3,
				},
				{
					q: "How do modern x86 CPUs handle complex instructions?",
					a: [
						"Decode into simpler operations",
						"Convert to RISC-V",
						"Execute from RAM",
						"Remove complex instructions",
					],
					c: 0,
				},
				{
					q: "What are the two basic RISC execution phases?",
					a: [
						"Decode and memory",
						"Memory and write-back",
						"Fetch and execute",
						"Execute and storage",
					],
					c: 2,
				},
				{
					q: "Which pipeline stage decodes instructions?",
					a: ["IF", "ID", "EX", "WB"],
					c: 1,
				},
				{
					q: "What does pipelining allow?",
					a: [
						"No dependencies",
						"Fewer instructions",
						"One-cycle completion",
						"Simultaneous stages",
					],
					c: 3,
				},
				{
					q: "What is a delayed branch?",
					a: [
						"Branch takes effect after next instruction",
						"Removed before decoding",
						"Executes twice",
						"Waits for memory",
					],
					c: 0,
				},
				{
					q: "What is a delayed load?",
					a: [
						"Blocks registers",
						"Memory without instructions",
						"Allows time for loaded data",
						"Always takes multiple cycles",
					],
					c: 2,
				},
				{
					q: "What is loop unrolling?",
					a: [
						"Removing loops",
						"Repeating loop operations",
						"Moving variables to RAM",
						"Using multiple CPUs",
					],
					c: 1,
				},
				{
					q: "What does loop unrolling improve?",
					a: [
						"Removes conditions",
						"Eliminates memory access",
						"Uses fewer registers",
						"Reduces loop overhead",
					],
					c: 3,
				},
				{
					q: "What does NOOP do?",
					a: [
						"Does nothing",
						"Cancels procedures",
						"Accesses memory",
						"Repeats operations",
					],
					c: 0,
				},
				{
					q: "How can a branch delay slot be optimized?",
					a: [
						"Skip fetching",
						"Add more branches",
						"Place a useful instruction",
						"Stop execution",
					],
					c: 2,
				},
				{
					q: "How do modern RISC and CISC processors relate?",
					a: [
						"RISC replaced CISC",
						"Combine both approaches",
						"CISC cannot pipeline",
						"Identical performance",
					],
					c: 1,
				},
				{
					q: "What does RISC stand for?",
					a: [
						"Reduced Instruction Set Computer",
						"Rapid Integrated System Controller",
						"Register Instruction Storage Component",
						"Reduced Internal Software Configuration",
					],
					c: 0,
				},
				{
					q: "Which topic is covered in the lecture?",
					a: [
						"Network routing",
						"Database indexing",
						"Graph coloring for register allocation",
						"Virtual machine setup",
					],
					c: 2,
				},
				{
					q: "Why separate architecture from implementation?",
					a: [
						"To eliminate software",
						"To share architecture across different implementations",
						"To make all hardware identical",
						"To remove processor instructions",
					],
					c: 1,
				},
				{
					q: "What did Intel introduce in 1971?",
					a: [
						"First cache memory",
						"First pipelined processor",
						"IBM System/360",
						"Intel 4004 microprocessor",
					],
					c: 3,
				},
				{
					q: "Why use regular RISC instruction formats?",
					a: [
						"Simpler instruction decoding",
						"Instructions bypass the CPU",
						"Registers are unnecessary",
						"All operations access memory",
					],
					c: 0,
				},
				{
					q: "Where are ARM processors commonly used?",
					a: [
						"Desktop computers only",
						"Research equipment only",
						"Phones, tablets, laptops, and servers",
						"Older embedded systems only",
					],
					c: 2,
				},
				{
					q: "What does open-standard RISC-V mean?",
					a: [
						"One company must manufacture it",
						"Its specifications are publicly available",
						"It is only for academics",
						"Its instruction set cannot be extended",
					],
					c: 1,
				},
				{
					q: "What does LW R1, 0(R2) do?",
					a: [
						"Adds R1 and R2",
						"Stores R1 in memory",
						"Copies R2 into R1",
						"Loads memory data into R1",
					],
					c: 3,
				},
				{
					q: "What is the semantic gap?",
					a: [
						"The difference between high-level operations and hardware instructions",
						"The difference between cache and RAM",
						"The difference between clock speeds",
						"The difference between local and global variables",
					],
					c: 0,
				},
				{
					q: "What does execution sequencing affect?",
					a: [
						"Physical memory size",
						"Available programming languages",
						"Processor control and pipeline design",
						"Hard drive capacity",
					],
					c: 2,
				},
				{
					q: "What does an IF statement control?",
					a: [
						"Register data movement",
						"Program execution order",
						"Variable memory allocation",
						"Secondary storage transfers",
					],
					c: 1,
				},
				{
					q: "Why can procedure calls be expensive?",
					a: [
						"They require a new processor",
						"They permanently increase program size",
						"They disable the cache",
						"They handle parameters and execution state",
					],
					c: 3,
				},
				{
					q: "What happens to a local variable after its function ends?",
					a: [
						"Its lifetime ends",
						"It becomes global",
						"It stays in a register",
						"It copies to other functions",
					],
					c: 0,
				},
				{
					q: "Which is a scalar variable?",
					a: [
						"int numbers[10]",
						"float temperatures[5]",
						"char grade = 'A'",
						"int scores[20]",
					],
					c: 2,
				},
				{
					q: "Repeatedly accessing the same address demonstrates what?",
					a: [
						"Spatial locality",
						"Temporal locality",
						"Sequential execution",
						"Instruction parallelism",
					],
					c: 1,
				},
				{
					q: "Why are nearby array elements likely to be accessed?",
					a: [
						"They are always in registers",
						"The CPU repeats array operations",
						"Arrays prevent random access",
						"They are stored consecutively",
					],
					c: 3,
				},
				{
					q: "Accessing addresses 2000 and 2001 demonstrates what?",
					a: [
						"Spatial locality",
						"Temporal locality",
						"Register allocation",
						"Procedure nesting",
					],
					c: 0,
				},
				{
					q: "What does the call stack track?",
					a: [
						"All permanent variables",
						"Processor cache blocks",
						"Active procedures and return order",
						"Instructions accessing memory",
					],
					c: 2,
				},
				{
					q: "Why can pipelines become inefficient?",
					a: [
						"They use too many registers",
						"Branches can waste prefetched instructions",
						"They prevent instruction decoding",
						"They require secondary storage",
					],
					c: 1,
				},
				{
					q: "How can software improve register usage?",
					a: [
						"Give each variable a processor",
						"Increase register file size",
						"Move everything into cache",
						"Use compiler register allocation",
					],
					c: 3,
				},
				{
					q: "Why use registers for frequent operands?",
					a: [
						"They provide fast, nearby storage",
						"They exceed main memory capacity",
						"They permanently store data",
						"They need no addressing",
					],
					c: 0,
				},
				{
					q: "What may need restoring after a procedure returns?",
					a: [
						"The instruction set",
						"All cache blocks",
						"The caller's variables and results",
						"The entire program",
					],
					c: 2,
				},
				{
					q: "How do register windows handle procedure calls?",
					a: [
						"Copy registers to storage",
						"Switch to another register set",
						"Replace registers with cache",
						"Permanently add registers",
					],
					c: 1,
				},
				{
					q: "What do temporary registers do in a register window?",
					a: [
						"Store global variables",
						"Hold the current instruction",
						"Store all main memory data",
						"Exchange parameters and results",
					],
					c: 3,
				},
				{
					q: "What do register windows help reduce?",
					a: [
						"Saving and restoring registers through memory",
						"Instruction decoding",
						"Instruction cache access",
						"Arithmetic operations",
					],
					c: 0,
				},
				{
					q: "How are parameters shared between adjacent procedures?",
					a: [
						"Through instruction cache",
						"Through global memory",
						"Through overlapping registers",
						"Through secondary storage",
					],
					c: 2,
				},
				{
					q: "What does the Current Window Pointer do?",
					a: [
						"Finds the oldest procedure",
						"Maps register references to physical registers",
						"Counts memory instructions",
						"Tracks clock cycles",
					],
					c: 1,
				},
				{
					q: "What causes a register window overflow?",
					a: [
						"Too many arithmetic instructions",
						"Too many cache blocks",
						"Too few instruction types",
						"A new call would overwrite a needed window",
					],
					c: 3,
				},
				{
					q: "How is a saved register window reused?",
					a: [
						"It is restored from memory",
						"A new processor is assigned",
						"Remaining instructions are skipped",
						"It is permanently discarded",
					],
					c: 0,
				},
				{
					q: "How are global variables handled by the compiler?",
					a: [
						"Stored in temporary registers",
						"Placed in instruction cache",
						"Allocated to memory",
						"Stored only on the call stack",
					],
					c: 2,
				},
				{
					q: "What does a cache generally store?",
					a: [
						"Only instructions",
						"Recently accessed memory blocks",
						"Only local variables",
						"Only procedure parameters",
					],
					c: 1,
				},
				{
					q: "What if symbolic registers exceed physical registers?",
					a: [
						"The CPU creates more registers",
						"The architecture changes",
						"All symbolic registers disappear",
						"Some variables go into memory",
					],
					c: 3,
				},
				{
					q: "Why might CISC not always produce smaller programs?",
					a: [
						"Short instructions do not always use fewer bits",
						"CISC lacks arithmetic instructions",
						"CISC instructions exceed program size",
						"CISC cannot encode instructions",
					],
					c: 0,
				},
				{
					q: "What is a drawback of a large microprogram control store?",
					a: [
						"It prevents register use",
						"It removes instruction decoding",
						"It can add control complexity and overhead",
						"It prevents simple instructions",
					],
					c: 2,
				},
				{
					q: "Which describes RISC instruction formats?",
					a: [
						"Many variable-length formats",
						"Fixed, simple formats",
						"Memory-only instructions",
						"Microcode for every operation",
					],
					c: 1,
				},
				{
					q: "How do ARM and x86 differ?",
					a: [
						"They use identical instruction sets",
						"ARM is CISC; x86 is RISC",
						"Both are mobile-only",
						"ARM is RISC; x86 is CISC",
					],
					c: 3,
				},
				{
					q: "What happens during a load instruction's memory stage?",
					a: [
						"Data moves between memory and a register",
						"Machine code is generated",
						"A branch destination is calculated",
						"The instruction is stored permanently",
					],
					c: 0,
				},
				{
					q: "Which pipeline stage performs arithmetic or logic?",
					a: ["IF", "ID", "EX", "MEM"],
					c: 2,
				},
				{
					q: "What can make pipelining difficult?",
					a: [
						"Instructions cannot run in parallel",
						"Dependencies and branches cause hazards",
						"Instructions must run one at a time",
						"Registers cannot be used",
					],
					c: 1,
				},
				{
					q: "Why rearrange instructions during delayed load optimization?",
					a: [
						"To increase memory operations",
						"To remove instruction fetch",
						"To force CPU delays",
						"To do useful work while data loads",
					],
					c: 3,
				},
				{
					q: "How can loop unrolling improve locality?",
					a: [
						"Reuse values across loop operations",
						"Prevent array access",
						"Remove all loop variables",
						"Move arrays to secondary storage",
					],
					c: 0,
				},
				{
					q: "Why place a NOOP after a delayed branch?",
					a: [
						"To calculate the destination",
						"To load an instruction into a register",
						"To fill an unused delay slot",
						"To repeat the branch",
					],
					c: 2,
				},
				{
					q: "What affects overall processor performance?",
					a: [
						"RISC always beats CISC",
						"Architecture, implementation, compiler, and workload",
						"Pipelines are no longer needed",
						"Compiler optimization has little effect",
					],
					c: 1,
				},
			],
		},
	};

	root.questionCodesQuick = {
		CompArch: "COMP-2453",
		CloudComp: "COMP-4312",
		SocIndi: "SOCI-2755",
		DataSci: "COMP-4112",
		SoftEngi: "COMP-3415",
		CompGFX: "COMP-4471",
	};

	root.quizThemesQuick = {
		Default: {
			pageBg: "#6f7d86",
			visualBg: "#348ac0",
			courseText: "#0e426c",
			questionText: "#0e426c",
			panelBg: "#6f7d86",
			panelBorder: "#91a4bf",
			buttonBg: "#b9bec0",
			buttonAccent: "#7a1731",
			success: "#39c85a",
			danger: "#d94b4b",
		},
		CompArch: {
			pageBg: "#7f1818",
			visualBg: "#7f1818",
			courseText: "#440a0a",
			questionText: "#fff6f6",
			hudText: "#ffffff",
			panelBg: "#c37714",
			panelBorder: "#d38517",
			buttonBg: "#ecd506",
			buttonAccent: "#7a6617",
			success: "#39c85a",
			danger: "#d94b4b",
		},
		CloudComp: {
			pageBg: "#6f7d86",
			visualBg: "#348ac0",
			courseText: "#0e426c",
			questionText: "#0e426c",
			panelBg: "#6f7d86",
			panelBorder: "#91a4bf",
			buttonBg: "#b9bec0",
			buttonAccent: "#7a1731",
			success: "#39c85a",
			danger: "#d94b4b",
		},
		SocIndi: {
			pageBg: "#6b4d6e",
			visualBg: "#b85ac4",
			courseText: "#321a3b",
			questionText: "#fdf3ff",
			panelBg: "#d9a8d9",
			panelBorder: "#c38ad3",
			buttonBg: "#f4d5ea",
			buttonAccent: "#7a1f60",
			success: "#39c85a",
			danger: "#d94b4b",
		},
		DataSci: {
			pageBg: "#4b2e16",
			visualBg: "#6b431d",
			courseText: "#3a210e",
			questionText: "#fff4bf",
			hudText: "#ffffff",
			panelBg: "#a96f24",
			panelBorder: "#d39a32",
			buttonBg: "#f0d34f",
			buttonAccent: "#6b431d",
			success: "#39c85a",
			danger: "#d94b4b",
		},
		CompGFX: {
			pageBg: "#6f8074",
			visualBg: "#348a58",
			courseText: "#174d2a",
			questionText: "#174d2a",
			panelBg: "#6f8074",
			panelBorder: "#91bf9b",
			buttonBg: "#bec8c0",
			buttonAccent: "#286b3b",
			success: "#39c85a",
			danger: "#d94b4b",
		},
		SoftEngi: {
			pageBg: "#212121",
			visualBg: "#2F2F2F",
			courseText: "#ECECEC",
			questionText: "#ECECEC",
			panelBg: "#303030",
			panelBorder: "#454545",
			buttonBg: "#424242",
			buttonAccent: "#10A37F",
			success: "#199bc3",
			danger: "#EF4444",
		},
	};
})(window);
