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
