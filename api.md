# Shared

Types:

- <code><a href="./src/resources/shared.ts">AutomationTrigger</a></code>
- <code><a href="./src/resources/shared.ts">EnvironmentClass</a></code>
- <code><a href="./src/resources/shared.ts">EnvironmentVariableItem</a></code>
- <code><a href="./src/resources/shared.ts">EnvironmentVariableSource</a></code>
- <code><a href="./src/resources/shared.ts">ErrorCode</a></code>
- <code><a href="./src/resources/shared.ts">FieldValue</a></code>
- <code><a href="./src/resources/shared.ts">Gateway</a></code>
- <code><a href="./src/resources/shared.ts">OrganizationRole</a></code>
- <code><a href="./src/resources/shared.ts">OrganizationTier</a></code>
- <code><a href="./src/resources/shared.ts">Principal</a></code>
- <code><a href="./src/resources/shared.ts">ProjectEnvironmentClass</a></code>
- <code><a href="./src/resources/shared.ts">ResourceRole</a></code>
- <code><a href="./src/resources/shared.ts">ResourceType</a></code>
- <code><a href="./src/resources/shared.ts">RunsOn</a></code>
- <code><a href="./src/resources/shared.ts">SecretRef</a></code>
- <code><a href="./src/resources/shared.ts">State</a></code>
- <code><a href="./src/resources/shared.ts">Subject</a></code>
- <code><a href="./src/resources/shared.ts">Task</a></code>
- <code><a href="./src/resources/shared.ts">TaskExecution</a></code>
- <code><a href="./src/resources/shared.ts">TaskExecutionMetadata</a></code>
- <code><a href="./src/resources/shared.ts">TaskExecutionPhase</a></code>
- <code><a href="./src/resources/shared.ts">TaskExecutionSpec</a></code>
- <code><a href="./src/resources/shared.ts">TaskExecutionStatus</a></code>
- <code><a href="./src/resources/shared.ts">TaskMetadata</a></code>
- <code><a href="./src/resources/shared.ts">TaskSpec</a></code>
- <code><a href="./src/resources/shared.ts">UserStatus</a></code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts.ts">AccountMembership</a></code>
- <code><a href="./src/resources/accounts.ts">JoinableOrganization</a></code>
- <code><a href="./src/resources/accounts.ts">LoginProvider</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountDeleteResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountGetSSOLoginURLResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountListSSOLoginsResponse</a></code>

Methods:

- <code title="post /gitpod.v1.AccountService/GetAccount">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>({ ...params }) -> AccountRetrieveResponse</code>
- <code title="post /gitpod.v1.AccountService/DeleteAccount">client.accounts.<a href="./src/resources/accounts.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.AccountService/GetSSOLoginURL">client.accounts.<a href="./src/resources/accounts.ts">getSSOLoginURL</a>({ ...params }) -> AccountGetSSOLoginURLResponse</code>
- <code title="post /gitpod.v1.AccountService/ListJoinableOrganizations">client.accounts.<a href="./src/resources/accounts.ts">listJoinableOrganizations</a>({ ...params }) -> JoinableOrganizationsJoinableOrganizationsPage</code>
- <code title="post /gitpod.v1.AccountService/ListLoginProviders">client.accounts.<a href="./src/resources/accounts.ts">listLoginProviders</a>({ ...params }) -> LoginProvidersLoginProvidersPage</code>
- <code title="post /gitpod.v1.AccountService/ListSSOLogins">client.accounts.<a href="./src/resources/accounts.ts">listSSOLogins</a>({ ...params }) -> AccountListSSOLoginsResponsesLoginsPage</code>

# Agents

Types:

- <code><a href="./src/resources/agents.ts">AgentCodeContext</a></code>
- <code><a href="./src/resources/agents.ts">AgentExecution</a></code>
- <code><a href="./src/resources/agents.ts">AgentMode</a></code>
- <code><a href="./src/resources/agents.ts">Prompt</a></code>
- <code><a href="./src/resources/agents.ts">PromptMetadata</a></code>
- <code><a href="./src/resources/agents.ts">PromptSpec</a></code>
- <code><a href="./src/resources/agents.ts">UserInputBlock</a></code>
- <code><a href="./src/resources/agents.ts">AgentCreateExecutionConversationTokenResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentCreatePromptResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentDeleteExecutionResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentDeletePromptResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentRetrieveExecutionResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentRetrievePromptResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentSendToExecutionResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentStartExecutionResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentStopExecutionResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentUpdatePromptResponse</a></code>

Methods:

- <code title="post /gitpod.v1.AgentService/CreateAgentExecutionConversationToken">client.agents.<a href="./src/resources/agents.ts">createExecutionConversationToken</a>({ ...params }) -> AgentCreateExecutionConversationTokenResponse</code>
- <code title="post /gitpod.v1.AgentService/CreatePrompt">client.agents.<a href="./src/resources/agents.ts">createPrompt</a>({ ...params }) -> AgentCreatePromptResponse</code>
- <code title="post /gitpod.v1.AgentService/DeleteAgentExecution">client.agents.<a href="./src/resources/agents.ts">deleteExecution</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.AgentService/DeletePrompt">client.agents.<a href="./src/resources/agents.ts">deletePrompt</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.AgentService/ListAgentExecutions">client.agents.<a href="./src/resources/agents.ts">listExecutions</a>({ ...params }) -> AgentExecutionsAgentExecutionsPage</code>
- <code title="post /gitpod.v1.AgentService/ListPrompts">client.agents.<a href="./src/resources/agents.ts">listPrompts</a>({ ...params }) -> PromptsPromptsPage</code>
- <code title="post /gitpod.v1.AgentService/GetAgentExecution">client.agents.<a href="./src/resources/agents.ts">retrieveExecution</a>({ ...params }) -> AgentRetrieveExecutionResponse</code>
- <code title="post /gitpod.v1.AgentService/GetPrompt">client.agents.<a href="./src/resources/agents.ts">retrievePrompt</a>({ ...params }) -> AgentRetrievePromptResponse</code>
- <code title="post /gitpod.v1.AgentService/SendToAgentExecution">client.agents.<a href="./src/resources/agents.ts">sendToExecution</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.AgentService/StartAgent">client.agents.<a href="./src/resources/agents.ts">startExecution</a>({ ...params }) -> AgentStartExecutionResponse</code>
- <code title="post /gitpod.v1.AgentService/StopAgentExecution">client.agents.<a href="./src/resources/agents.ts">stopExecution</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.AgentService/UpdatePrompt">client.agents.<a href="./src/resources/agents.ts">updatePrompt</a>({ ...params }) -> AgentUpdatePromptResponse</code>

# Editors

Types:

- <code><a href="./src/resources/editors.ts">Editor</a></code>
- <code><a href="./src/resources/editors.ts">EditorVersion</a></code>
- <code><a href="./src/resources/editors.ts">EditorRetrieveResponse</a></code>
- <code><a href="./src/resources/editors.ts">EditorResolveURLResponse</a></code>

Methods:

- <code title="post /gitpod.v1.EditorService/GetEditor">client.editors.<a href="./src/resources/editors.ts">retrieve</a>({ ...params }) -> EditorRetrieveResponse</code>
- <code title="post /gitpod.v1.EditorService/ListEditors">client.editors.<a href="./src/resources/editors.ts">list</a>({ ...params }) -> EditorsEditorsPage</code>
- <code title="post /gitpod.v1.EditorService/ResolveEditorURL">client.editors.<a href="./src/resources/editors.ts">resolveURL</a>({ ...params }) -> EditorResolveURLResponse</code>

# Environments

Types:

- <code><a href="./src/resources/environments/environments.ts">AdmissionLevel</a></code>
- <code><a href="./src/resources/environments/environments.ts">Environment</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentActivitySignal</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentMetadata</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentPhase</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentRole</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentSpec</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentStatus</a></code>
- <code><a href="./src/resources/environments/environments.ts">KernelControlsConfig</a></code>
- <code><a href="./src/resources/environments/environments.ts">Veto</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentCreateResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentRetrieveResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentUpdateResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentDeleteResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentCreateEnvironmentTokenResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentCreateFromProjectResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentCreateLogsTokenResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentMarkActiveResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentStartResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentStopResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentUnarchiveResponse</a></code>

Methods:

- <code title="post /gitpod.v1.EnvironmentService/CreateEnvironment">client.environments.<a href="./src/resources/environments/environments.ts">create</a>({ ...params }) -> EnvironmentCreateResponse</code>
- <code title="post /gitpod.v1.EnvironmentService/GetEnvironment">client.environments.<a href="./src/resources/environments/environments.ts">retrieve</a>({ ...params }) -> EnvironmentRetrieveResponse</code>
- <code title="post /gitpod.v1.EnvironmentService/UpdateEnvironment">client.environments.<a href="./src/resources/environments/environments.ts">update</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentService/ListEnvironments">client.environments.<a href="./src/resources/environments/environments.ts">list</a>({ ...params }) -> EnvironmentsEnvironmentsPage</code>
- <code title="post /gitpod.v1.EnvironmentService/DeleteEnvironment">client.environments.<a href="./src/resources/environments/environments.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentService/CreateEnvironmentAccessToken">client.environments.<a href="./src/resources/environments/environments.ts">createEnvironmentToken</a>({ ...params }) -> EnvironmentCreateEnvironmentTokenResponse</code>
- <code title="post /gitpod.v1.EnvironmentService/CreateEnvironmentFromProject">client.environments.<a href="./src/resources/environments/environments.ts">createFromProject</a>({ ...params }) -> EnvironmentCreateFromProjectResponse</code>
- <code title="post /gitpod.v1.EnvironmentService/CreateEnvironmentLogsToken">client.environments.<a href="./src/resources/environments/environments.ts">createLogsToken</a>({ ...params }) -> EnvironmentCreateLogsTokenResponse</code>
- <code title="post /gitpod.v1.EnvironmentService/MarkEnvironmentActive">client.environments.<a href="./src/resources/environments/environments.ts">markActive</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentService/StartEnvironment">client.environments.<a href="./src/resources/environments/environments.ts">start</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentService/StopEnvironment">client.environments.<a href="./src/resources/environments/environments.ts">stop</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentService/UnarchiveEnvironment">client.environments.<a href="./src/resources/environments/environments.ts">unarchive</a>({ ...params }) -> unknown</code>

## Automations

Types:

- <code><a href="./src/resources/environments/automations/automations.ts">AutomationsFile</a></code>
- <code><a href="./src/resources/environments/automations/automations.ts">AutomationUpsertResponse</a></code>

Methods:

- <code title="post /gitpod.v1.EnvironmentAutomationService/UpsertAutomationsFile">client.environments.automations.<a href="./src/resources/environments/automations/automations.ts">upsert</a>({ ...params }) -> AutomationUpsertResponse</code>

### Services

Types:

- <code><a href="./src/resources/environments/automations/services.ts">Service</a></code>
- <code><a href="./src/resources/environments/automations/services.ts">ServiceMetadata</a></code>
- <code><a href="./src/resources/environments/automations/services.ts">ServicePhase</a></code>
- <code><a href="./src/resources/environments/automations/services.ts">ServiceRole</a></code>
- <code><a href="./src/resources/environments/automations/services.ts">ServiceSpec</a></code>
- <code><a href="./src/resources/environments/automations/services.ts">ServiceStatus</a></code>
- <code><a href="./src/resources/environments/automations/services.ts">ServiceCreateResponse</a></code>
- <code><a href="./src/resources/environments/automations/services.ts">ServiceRetrieveResponse</a></code>
- <code><a href="./src/resources/environments/automations/services.ts">ServiceUpdateResponse</a></code>
- <code><a href="./src/resources/environments/automations/services.ts">ServiceDeleteResponse</a></code>
- <code><a href="./src/resources/environments/automations/services.ts">ServiceStartResponse</a></code>
- <code><a href="./src/resources/environments/automations/services.ts">ServiceStopResponse</a></code>

Methods:

- <code title="post /gitpod.v1.EnvironmentAutomationService/CreateService">client.environments.automations.services.<a href="./src/resources/environments/automations/services.ts">create</a>({ ...params }) -> ServiceCreateResponse</code>
- <code title="post /gitpod.v1.EnvironmentAutomationService/GetService">client.environments.automations.services.<a href="./src/resources/environments/automations/services.ts">retrieve</a>({ ...params }) -> ServiceRetrieveResponse</code>
- <code title="post /gitpod.v1.EnvironmentAutomationService/UpdateService">client.environments.automations.services.<a href="./src/resources/environments/automations/services.ts">update</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentAutomationService/ListServices">client.environments.automations.services.<a href="./src/resources/environments/automations/services.ts">list</a>({ ...params }) -> ServicesServicesPage</code>
- <code title="post /gitpod.v1.EnvironmentAutomationService/DeleteService">client.environments.automations.services.<a href="./src/resources/environments/automations/services.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentAutomationService/StartService">client.environments.automations.services.<a href="./src/resources/environments/automations/services.ts">start</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentAutomationService/StopService">client.environments.automations.services.<a href="./src/resources/environments/automations/services.ts">stop</a>({ ...params }) -> unknown</code>

### Tasks

Types:

- <code><a href="./src/resources/environments/automations/tasks/tasks.ts">TaskCreateResponse</a></code>
- <code><a href="./src/resources/environments/automations/tasks/tasks.ts">TaskRetrieveResponse</a></code>
- <code><a href="./src/resources/environments/automations/tasks/tasks.ts">TaskUpdateResponse</a></code>
- <code><a href="./src/resources/environments/automations/tasks/tasks.ts">TaskDeleteResponse</a></code>
- <code><a href="./src/resources/environments/automations/tasks/tasks.ts">TaskStartResponse</a></code>

Methods:

- <code title="post /gitpod.v1.EnvironmentAutomationService/CreateTask">client.environments.automations.tasks.<a href="./src/resources/environments/automations/tasks/tasks.ts">create</a>({ ...params }) -> TaskCreateResponse</code>
- <code title="post /gitpod.v1.EnvironmentAutomationService/GetTask">client.environments.automations.tasks.<a href="./src/resources/environments/automations/tasks/tasks.ts">retrieve</a>({ ...params }) -> TaskRetrieveResponse</code>
- <code title="post /gitpod.v1.EnvironmentAutomationService/UpdateTask">client.environments.automations.tasks.<a href="./src/resources/environments/automations/tasks/tasks.ts">update</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentAutomationService/ListTasks">client.environments.automations.tasks.<a href="./src/resources/environments/automations/tasks/tasks.ts">list</a>({ ...params }) -> TasksTasksPage</code>
- <code title="post /gitpod.v1.EnvironmentAutomationService/DeleteTask">client.environments.automations.tasks.<a href="./src/resources/environments/automations/tasks/tasks.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentAutomationService/StartTask">client.environments.automations.tasks.<a href="./src/resources/environments/automations/tasks/tasks.ts">start</a>({ ...params }) -> TaskStartResponse</code>

#### Executions

Types:

- <code><a href="./src/resources/environments/automations/tasks/executions.ts">ExecutionRetrieveResponse</a></code>
- <code><a href="./src/resources/environments/automations/tasks/executions.ts">ExecutionStopResponse</a></code>

Methods:

- <code title="post /gitpod.v1.EnvironmentAutomationService/GetTaskExecution">client.environments.automations.tasks.executions.<a href="./src/resources/environments/automations/tasks/executions.ts">retrieve</a>({ ...params }) -> ExecutionRetrieveResponse</code>
- <code title="post /gitpod.v1.EnvironmentAutomationService/ListTaskExecutions">client.environments.automations.tasks.executions.<a href="./src/resources/environments/automations/tasks/executions.ts">list</a>({ ...params }) -> TaskExecutionsTaskExecutionsPage</code>
- <code title="post /gitpod.v1.EnvironmentAutomationService/StopTaskExecution">client.environments.automations.tasks.executions.<a href="./src/resources/environments/automations/tasks/executions.ts">stop</a>({ ...params }) -> unknown</code>

## Classes

Methods:

- <code title="post /gitpod.v1.EnvironmentService/ListEnvironmentClasses">client.environments.classes.<a href="./src/resources/environments/classes.ts">list</a>({ ...params }) -> EnvironmentClassesEnvironmentClassesPage</code>

# Errors

Types:

- <code><a href="./src/resources/errors.ts">Breadcrumb</a></code>
- <code><a href="./src/resources/errors.ts">ErrorEvent</a></code>
- <code><a href="./src/resources/errors.ts">ErrorLevel</a></code>
- <code><a href="./src/resources/errors.ts">ExceptionInfo</a></code>
- <code><a href="./src/resources/errors.ts">ExceptionMechanism</a></code>
- <code><a href="./src/resources/errors.ts">RequestInfo</a></code>
- <code><a href="./src/resources/errors.ts">StackFrame</a></code>
- <code><a href="./src/resources/errors.ts">ErrorReportErrorsResponse</a></code>

Methods:

- <code title="post /gitpod.v1.ErrorsService/ReportErrors">client.errors.<a href="./src/resources/errors.ts">reportErrors</a>({ ...params }) -> unknown</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">ResourceOperation</a></code>
- <code><a href="./src/resources/events.ts">EventListResponse</a></code>
- <code><a href="./src/resources/events.ts">EventWatchResponse</a></code>

Methods:

- <code title="post /gitpod.v1.EventService/ListAuditLogs">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> EventListResponsesEntriesPage</code>
- <code title="post /gitpod.v1.EventService/WatchEvents">client.events.<a href="./src/resources/events.ts">watch</a>({ ...params }) -> EventWatchResponse</code>

# Gateways

Methods:

- <code title="post /gitpod.v1.GatewayService/ListGateways">client.gateways.<a href="./src/resources/gateways.ts">list</a>({ ...params }) -> GatewaysGatewaysPage</code>

# Groups

Types:

- <code><a href="./src/resources/groups/groups.ts">Group</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupCreateResponse</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupRetrieveResponse</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupDeleteResponse</a></code>

Methods:

- <code title="post /gitpod.v1.GroupService/CreateGroup">client.groups.<a href="./src/resources/groups/groups.ts">create</a>({ ...params }) -> GroupCreateResponse</code>
- <code title="post /gitpod.v1.GroupService/GetGroup">client.groups.<a href="./src/resources/groups/groups.ts">retrieve</a>({ ...params }) -> GroupRetrieveResponse</code>
- <code title="post /gitpod.v1.GroupService/UpdateGroup">client.groups.<a href="./src/resources/groups/groups.ts">update</a>({ ...params }) -> GroupUpdateResponse</code>
- <code title="post /gitpod.v1.GroupService/ListGroups">client.groups.<a href="./src/resources/groups/groups.ts">list</a>({ ...params }) -> GroupsGroupsPage</code>
- <code title="post /gitpod.v1.GroupService/DeleteGroup">client.groups.<a href="./src/resources/groups/groups.ts">delete</a>({ ...params }) -> unknown</code>

## Memberships

Types:

- <code><a href="./src/resources/groups/memberships.ts">GroupMembership</a></code>
- <code><a href="./src/resources/groups/memberships.ts">MembershipCreateResponse</a></code>
- <code><a href="./src/resources/groups/memberships.ts">MembershipRetrieveResponse</a></code>
- <code><a href="./src/resources/groups/memberships.ts">MembershipDeleteResponse</a></code>

Methods:

- <code title="post /gitpod.v1.GroupService/CreateMembership">client.groups.memberships.<a href="./src/resources/groups/memberships.ts">create</a>({ ...params }) -> MembershipCreateResponse</code>
- <code title="post /gitpod.v1.GroupService/GetMembership">client.groups.memberships.<a href="./src/resources/groups/memberships.ts">retrieve</a>({ ...params }) -> MembershipRetrieveResponse</code>
- <code title="post /gitpod.v1.GroupService/ListMemberships">client.groups.memberships.<a href="./src/resources/groups/memberships.ts">list</a>({ ...params }) -> GroupMembershipsMembersPage</code>
- <code title="post /gitpod.v1.GroupService/DeleteMembership">client.groups.memberships.<a href="./src/resources/groups/memberships.ts">delete</a>({ ...params }) -> unknown</code>

## RoleAssignments

Types:

- <code><a href="./src/resources/groups/role-assignments.ts">RoleAssignment</a></code>
- <code><a href="./src/resources/groups/role-assignments.ts">RoleAssignmentCreateResponse</a></code>
- <code><a href="./src/resources/groups/role-assignments.ts">RoleAssignmentDeleteResponse</a></code>

Methods:

- <code title="post /gitpod.v1.GroupService/CreateRoleAssignment">client.groups.roleAssignments.<a href="./src/resources/groups/role-assignments.ts">create</a>({ ...params }) -> RoleAssignmentCreateResponse</code>
- <code title="post /gitpod.v1.GroupService/ListRoleAssignments">client.groups.roleAssignments.<a href="./src/resources/groups/role-assignments.ts">list</a>({ ...params }) -> RoleAssignmentsAssignmentsPage</code>
- <code title="post /gitpod.v1.GroupService/DeleteRoleAssignment">client.groups.roleAssignments.<a href="./src/resources/groups/role-assignments.ts">delete</a>({ ...params }) -> unknown</code>

## Shares

Types:

- <code><a href="./src/resources/groups/shares.ts">ShareCreateResponse</a></code>
- <code><a href="./src/resources/groups/shares.ts">ShareDeleteResponse</a></code>

Methods:

- <code title="post /gitpod.v1.GroupService/ShareResourceWithPrincipal">client.groups.shares.<a href="./src/resources/groups/shares.ts">create</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.GroupService/UnshareResourceWithPrincipal">client.groups.shares.<a href="./src/resources/groups/shares.ts">delete</a>({ ...params }) -> unknown</code>

# Identity

Types:

- <code><a href="./src/resources/identity.ts">IDTokenVersion</a></code>
- <code><a href="./src/resources/identity.ts">IdentityExchangeTokenResponse</a></code>
- <code><a href="./src/resources/identity.ts">IdentityGetAuthenticatedIdentityResponse</a></code>
- <code><a href="./src/resources/identity.ts">IdentityGetIDTokenResponse</a></code>

Methods:

- <code title="post /gitpod.v1.IdentityService/ExchangeToken">client.identity.<a href="./src/resources/identity.ts">exchangeToken</a>({ ...params }) -> IdentityExchangeTokenResponse</code>
- <code title="post /gitpod.v1.IdentityService/GetAuthenticatedIdentity">client.identity.<a href="./src/resources/identity.ts">getAuthenticatedIdentity</a>({ ...params }) -> IdentityGetAuthenticatedIdentityResponse</code>
- <code title="post /gitpod.v1.IdentityService/GetIDToken">client.identity.<a href="./src/resources/identity.ts">getIDToken</a>({ ...params }) -> IdentityGetIDTokenResponse</code>

# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">InviteDomains</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationMember</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationCreateResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationUpdateResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationDeleteResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationJoinResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationLeaveResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationSetRoleResponse</a></code>

Methods:

- <code title="post /gitpod.v1.OrganizationService/CreateOrganization">client.organizations.<a href="./src/resources/organizations/organizations.ts">create</a>({ ...params }) -> OrganizationCreateResponse</code>
- <code title="post /gitpod.v1.OrganizationService/GetOrganization">client.organizations.<a href="./src/resources/organizations/organizations.ts">retrieve</a>({ ...params }) -> OrganizationRetrieveResponse</code>
- <code title="post /gitpod.v1.OrganizationService/UpdateOrganization">client.organizations.<a href="./src/resources/organizations/organizations.ts">update</a>({ ...params }) -> OrganizationUpdateResponse</code>
- <code title="post /gitpod.v1.OrganizationService/DeleteOrganization">client.organizations.<a href="./src/resources/organizations/organizations.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.OrganizationService/JoinOrganization">client.organizations.<a href="./src/resources/organizations/organizations.ts">join</a>({ ...params }) -> OrganizationJoinResponse</code>
- <code title="post /gitpod.v1.OrganizationService/LeaveOrganization">client.organizations.<a href="./src/resources/organizations/organizations.ts">leave</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.OrganizationService/ListMembers">client.organizations.<a href="./src/resources/organizations/organizations.ts">listMembers</a>({ ...params }) -> OrganizationMembersMembersPage</code>
- <code title="post /gitpod.v1.OrganizationService/SetRole">client.organizations.<a href="./src/resources/organizations/organizations.ts">setRole</a>({ ...params }) -> unknown</code>

## AnnouncementBanner

Types:

- <code><a href="./src/resources/organizations/announcement-banner.ts">AnnouncementBanner</a></code>
- <code><a href="./src/resources/organizations/announcement-banner.ts">AnnouncementBannerUpdateResponse</a></code>
- <code><a href="./src/resources/organizations/announcement-banner.ts">AnnouncementBannerGetResponse</a></code>

Methods:

- <code title="post /gitpod.v1.OrganizationService/UpdateAnnouncementBanner">client.organizations.announcementBanner.<a href="./src/resources/organizations/announcement-banner.ts">update</a>({ ...params }) -> AnnouncementBannerUpdateResponse</code>
- <code title="post /gitpod.v1.OrganizationService/GetAnnouncementBanner">client.organizations.announcementBanner.<a href="./src/resources/organizations/announcement-banner.ts">get</a>({ ...params }) -> AnnouncementBannerGetResponse</code>

## CustomDomains

Types:

- <code><a href="./src/resources/organizations/custom-domains.ts">CustomDomain</a></code>
- <code><a href="./src/resources/organizations/custom-domains.ts">CustomDomainProvider</a></code>
- <code><a href="./src/resources/organizations/custom-domains.ts">CustomDomainCreateResponse</a></code>
- <code><a href="./src/resources/organizations/custom-domains.ts">CustomDomainRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/custom-domains.ts">CustomDomainUpdateResponse</a></code>
- <code><a href="./src/resources/organizations/custom-domains.ts">CustomDomainDeleteResponse</a></code>

Methods:

- <code title="post /gitpod.v1.OrganizationService/CreateCustomDomain">client.organizations.customDomains.<a href="./src/resources/organizations/custom-domains.ts">create</a>({ ...params }) -> CustomDomainCreateResponse</code>
- <code title="post /gitpod.v1.OrganizationService/GetCustomDomain">client.organizations.customDomains.<a href="./src/resources/organizations/custom-domains.ts">retrieve</a>({ ...params }) -> CustomDomainRetrieveResponse</code>
- <code title="post /gitpod.v1.OrganizationService/UpdateCustomDomain">client.organizations.customDomains.<a href="./src/resources/organizations/custom-domains.ts">update</a>({ ...params }) -> CustomDomainUpdateResponse</code>
- <code title="post /gitpod.v1.OrganizationService/DeleteCustomDomain">client.organizations.customDomains.<a href="./src/resources/organizations/custom-domains.ts">delete</a>({ ...params }) -> unknown</code>

## DomainVerifications

Types:

- <code><a href="./src/resources/organizations/domain-verifications.ts">DomainVerification</a></code>
- <code><a href="./src/resources/organizations/domain-verifications.ts">DomainVerificationState</a></code>
- <code><a href="./src/resources/organizations/domain-verifications.ts">DomainVerificationCreateResponse</a></code>
- <code><a href="./src/resources/organizations/domain-verifications.ts">DomainVerificationRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/domain-verifications.ts">DomainVerificationDeleteResponse</a></code>
- <code><a href="./src/resources/organizations/domain-verifications.ts">DomainVerificationVerifyResponse</a></code>

Methods:

- <code title="post /gitpod.v1.OrganizationService/CreateDomainVerification">client.organizations.domainVerifications.<a href="./src/resources/organizations/domain-verifications.ts">create</a>({ ...params }) -> DomainVerificationCreateResponse</code>
- <code title="post /gitpod.v1.OrganizationService/GetDomainVerification">client.organizations.domainVerifications.<a href="./src/resources/organizations/domain-verifications.ts">retrieve</a>({ ...params }) -> DomainVerificationRetrieveResponse</code>
- <code title="post /gitpod.v1.OrganizationService/ListDomainVerifications">client.organizations.domainVerifications.<a href="./src/resources/organizations/domain-verifications.ts">list</a>({ ...params }) -> DomainVerificationsDomainVerificationsPage</code>
- <code title="post /gitpod.v1.OrganizationService/DeleteDomainVerification">client.organizations.domainVerifications.<a href="./src/resources/organizations/domain-verifications.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.OrganizationService/VerifyDomain">client.organizations.domainVerifications.<a href="./src/resources/organizations/domain-verifications.ts">verify</a>({ ...params }) -> DomainVerificationVerifyResponse</code>

## Invites

Types:

- <code><a href="./src/resources/organizations/invites.ts">OrganizationInvite</a></code>
- <code><a href="./src/resources/organizations/invites.ts">InviteCreateResponse</a></code>
- <code><a href="./src/resources/organizations/invites.ts">InviteRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/invites.ts">InviteGetSummaryResponse</a></code>

Methods:

- <code title="post /gitpod.v1.OrganizationService/CreateOrganizationInvite">client.organizations.invites.<a href="./src/resources/organizations/invites.ts">create</a>({ ...params }) -> InviteCreateResponse</code>
- <code title="post /gitpod.v1.OrganizationService/GetOrganizationInvite">client.organizations.invites.<a href="./src/resources/organizations/invites.ts">retrieve</a>({ ...params }) -> InviteRetrieveResponse</code>
- <code title="post /gitpod.v1.OrganizationService/GetOrganizationInviteSummary">client.organizations.invites.<a href="./src/resources/organizations/invites.ts">getSummary</a>({ ...params }) -> InviteGetSummaryResponse</code>

## Policies

Types:

- <code><a href="./src/resources/organizations/policies.ts">AgentPolicy</a></code>
- <code><a href="./src/resources/organizations/policies.ts">CrowdStrikeConfig</a></code>
- <code><a href="./src/resources/organizations/policies.ts">ExecutableDenyList</a></code>
- <code><a href="./src/resources/organizations/policies.ts">KernelControlsAction</a></code>
- <code><a href="./src/resources/organizations/policies.ts">OrganizationPolicies</a></code>
- <code><a href="./src/resources/organizations/policies.ts">SecurityAgentPolicy</a></code>
- <code><a href="./src/resources/organizations/policies.ts">PolicyRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/policies.ts">PolicyUpdateResponse</a></code>

Methods:

- <code title="post /gitpod.v1.OrganizationService/GetOrganizationPolicies">client.organizations.policies.<a href="./src/resources/organizations/policies.ts">retrieve</a>({ ...params }) -> PolicyRetrieveResponse</code>
- <code title="post /gitpod.v1.OrganizationService/UpdateOrganizationPolicies">client.organizations.policies.<a href="./src/resources/organizations/policies.ts">update</a>({ ...params }) -> unknown</code>

## ScimConfigurations

Types:

- <code><a href="./src/resources/organizations/scim-configurations.ts">ScimConfiguration</a></code>
- <code><a href="./src/resources/organizations/scim-configurations.ts">ScimConfigurationCreateResponse</a></code>
- <code><a href="./src/resources/organizations/scim-configurations.ts">ScimConfigurationRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/scim-configurations.ts">ScimConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/organizations/scim-configurations.ts">ScimConfigurationDeleteResponse</a></code>
- <code><a href="./src/resources/organizations/scim-configurations.ts">ScimConfigurationRegenerateTokenResponse</a></code>

Methods:

- <code title="post /gitpod.v1.OrganizationService/CreateSCIMConfiguration">client.organizations.scimConfigurations.<a href="./src/resources/organizations/scim-configurations.ts">create</a>({ ...params }) -> ScimConfigurationCreateResponse</code>
- <code title="post /gitpod.v1.OrganizationService/GetSCIMConfiguration">client.organizations.scimConfigurations.<a href="./src/resources/organizations/scim-configurations.ts">retrieve</a>({ ...params }) -> ScimConfigurationRetrieveResponse</code>
- <code title="post /gitpod.v1.OrganizationService/UpdateSCIMConfiguration">client.organizations.scimConfigurations.<a href="./src/resources/organizations/scim-configurations.ts">update</a>({ ...params }) -> ScimConfigurationUpdateResponse</code>
- <code title="post /gitpod.v1.OrganizationService/ListSCIMConfigurations">client.organizations.scimConfigurations.<a href="./src/resources/organizations/scim-configurations.ts">list</a>({ ...params }) -> ScimConfigurationsScimConfigurationsPage</code>
- <code title="post /gitpod.v1.OrganizationService/DeleteSCIMConfiguration">client.organizations.scimConfigurations.<a href="./src/resources/organizations/scim-configurations.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.OrganizationService/RegenerateSCIMToken">client.organizations.scimConfigurations.<a href="./src/resources/organizations/scim-configurations.ts">regenerateToken</a>({ ...params }) -> ScimConfigurationRegenerateTokenResponse</code>

## SSOConfigurations

Types:

- <code><a href="./src/resources/organizations/sso-configurations.ts">AdditionalScopesUpdate</a></code>
- <code><a href="./src/resources/organizations/sso-configurations.ts">ProviderType</a></code>
- <code><a href="./src/resources/organizations/sso-configurations.ts">SSOConfiguration</a></code>
- <code><a href="./src/resources/organizations/sso-configurations.ts">SSOConfigurationState</a></code>
- <code><a href="./src/resources/organizations/sso-configurations.ts">SSOConfigurationCreateResponse</a></code>
- <code><a href="./src/resources/organizations/sso-configurations.ts">SSOConfigurationRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/sso-configurations.ts">SSOConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/organizations/sso-configurations.ts">SSOConfigurationDeleteResponse</a></code>

Methods:

- <code title="post /gitpod.v1.OrganizationService/CreateSSOConfiguration">client.organizations.ssoConfigurations.<a href="./src/resources/organizations/sso-configurations.ts">create</a>({ ...params }) -> SSOConfigurationCreateResponse</code>
- <code title="post /gitpod.v1.OrganizationService/GetSSOConfiguration">client.organizations.ssoConfigurations.<a href="./src/resources/organizations/sso-configurations.ts">retrieve</a>({ ...params }) -> SSOConfigurationRetrieveResponse</code>
- <code title="post /gitpod.v1.OrganizationService/UpdateSSOConfiguration">client.organizations.ssoConfigurations.<a href="./src/resources/organizations/sso-configurations.ts">update</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.OrganizationService/ListSSOConfigurations">client.organizations.ssoConfigurations.<a href="./src/resources/organizations/sso-configurations.ts">list</a>({ ...params }) -> SSOConfigurationsSSOConfigurationsPage</code>
- <code title="post /gitpod.v1.OrganizationService/DeleteSSOConfiguration">client.organizations.ssoConfigurations.<a href="./src/resources/organizations/sso-configurations.ts">delete</a>({ ...params }) -> unknown</code>

# Prebuilds

Types:

- <code><a href="./src/resources/prebuilds.ts">Prebuild</a></code>
- <code><a href="./src/resources/prebuilds.ts">PrebuildMetadata</a></code>
- <code><a href="./src/resources/prebuilds.ts">PrebuildPhase</a></code>
- <code><a href="./src/resources/prebuilds.ts">PrebuildSpec</a></code>
- <code><a href="./src/resources/prebuilds.ts">PrebuildStatus</a></code>
- <code><a href="./src/resources/prebuilds.ts">PrebuildTrigger</a></code>
- <code><a href="./src/resources/prebuilds.ts">PrebuildCreateResponse</a></code>
- <code><a href="./src/resources/prebuilds.ts">PrebuildRetrieveResponse</a></code>
- <code><a href="./src/resources/prebuilds.ts">PrebuildDeleteResponse</a></code>
- <code><a href="./src/resources/prebuilds.ts">PrebuildCancelResponse</a></code>
- <code><a href="./src/resources/prebuilds.ts">PrebuildCreateLogsTokenResponse</a></code>

Methods:

- <code title="post /gitpod.v1.PrebuildService/CreatePrebuild">client.prebuilds.<a href="./src/resources/prebuilds.ts">create</a>({ ...params }) -> PrebuildCreateResponse</code>
- <code title="post /gitpod.v1.PrebuildService/GetPrebuild">client.prebuilds.<a href="./src/resources/prebuilds.ts">retrieve</a>({ ...params }) -> PrebuildRetrieveResponse</code>
- <code title="post /gitpod.v1.PrebuildService/ListPrebuilds">client.prebuilds.<a href="./src/resources/prebuilds.ts">list</a>({ ...params }) -> PrebuildsPrebuildsPage</code>
- <code title="post /gitpod.v1.PrebuildService/DeletePrebuild">client.prebuilds.<a href="./src/resources/prebuilds.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.PrebuildService/CancelPrebuild">client.prebuilds.<a href="./src/resources/prebuilds.ts">cancel</a>({ ...params }) -> PrebuildCancelResponse</code>
- <code title="post /gitpod.v1.PrebuildService/CreatePrebuildLogsToken">client.prebuilds.<a href="./src/resources/prebuilds.ts">createLogsToken</a>({ ...params }) -> PrebuildCreateLogsTokenResponse</code>

# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">EnvironmentInitializer</a></code>
- <code><a href="./src/resources/projects/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectMetadata</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectPhase</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectPrebuildConfiguration</a></code>
- <code><a href="./src/resources/projects/projects.ts">RecommendedEditors</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectUpdateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectBulkCreateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectBulkDeleteResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectBulkUpdateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectCreateFromEnvironmentResponse</a></code>

Methods:

- <code title="post /gitpod.v1.ProjectService/CreateProject">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="post /gitpod.v1.ProjectService/GetProject">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>({ ...params }) -> ProjectRetrieveResponse</code>
- <code title="post /gitpod.v1.ProjectService/UpdateProject">client.projects.<a href="./src/resources/projects/projects.ts">update</a>({ ...params }) -> ProjectUpdateResponse</code>
- <code title="post /gitpod.v1.ProjectService/ListProjects">client.projects.<a href="./src/resources/projects/projects.ts">list</a>({ ...params }) -> ProjectsProjectsPage</code>
- <code title="post /gitpod.v1.ProjectService/DeleteProject">client.projects.<a href="./src/resources/projects/projects.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.ProjectService/CreateProjects">client.projects.<a href="./src/resources/projects/projects.ts">bulkCreate</a>({ ...params }) -> ProjectBulkCreateResponse</code>
- <code title="post /gitpod.v1.ProjectService/DeleteProjects">client.projects.<a href="./src/resources/projects/projects.ts">bulkDelete</a>({ ...params }) -> ProjectBulkDeleteResponse</code>
- <code title="post /gitpod.v1.ProjectService/UpdateProjects">client.projects.<a href="./src/resources/projects/projects.ts">bulkUpdate</a>({ ...params }) -> ProjectBulkUpdateResponse</code>
- <code title="post /gitpod.v1.ProjectService/CreateProjectFromEnvironment">client.projects.<a href="./src/resources/projects/projects.ts">createFromEnvironment</a>({ ...params }) -> ProjectCreateFromEnvironmentResponse</code>

## EnvironmentClases

Types:

- <code><a href="./src/resources/projects/environment-clases.ts">EnvironmentClaseUpdateResponse</a></code>

Methods:

- <code title="post /gitpod.v1.ProjectService/UpdateProjectEnvironmentClasses">client.projects.environmentClases.<a href="./src/resources/projects/environment-clases.ts">update</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.ProjectService/ListProjectEnvironmentClasses">client.projects.environmentClases.<a href="./src/resources/projects/environment-clases.ts">list</a>({ ...params }) -> ProjectEnvironmentClassesProjectEnvironmentClassesPage</code>

## Policies

Types:

- <code><a href="./src/resources/projects/policies.ts">ProjectPolicy</a></code>
- <code><a href="./src/resources/projects/policies.ts">ProjectRole</a></code>
- <code><a href="./src/resources/projects/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/projects/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/projects/policies.ts">PolicyDeleteResponse</a></code>

Methods:

- <code title="post /gitpod.v1.ProjectService/CreateProjectPolicy">client.projects.policies.<a href="./src/resources/projects/policies.ts">create</a>({ ...params }) -> PolicyCreateResponse</code>
- <code title="post /gitpod.v1.ProjectService/UpdateProjectPolicy">client.projects.policies.<a href="./src/resources/projects/policies.ts">update</a>({ ...params }) -> PolicyUpdateResponse</code>
- <code title="post /gitpod.v1.ProjectService/ListProjectPolicies">client.projects.policies.<a href="./src/resources/projects/policies.ts">list</a>({ ...params }) -> ProjectPoliciesPoliciesPage</code>
- <code title="post /gitpod.v1.ProjectService/DeleteProjectPolicy">client.projects.policies.<a href="./src/resources/projects/policies.ts">delete</a>({ ...params }) -> unknown</code>

# Runners

Types:

- <code><a href="./src/resources/runners/runners.ts">GatewayInfo</a></code>
- <code><a href="./src/resources/runners/runners.ts">LogLevel</a></code>
- <code><a href="./src/resources/runners/runners.ts">MetricsConfiguration</a></code>
- <code><a href="./src/resources/runners/runners.ts">Runner</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerCapability</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerConfiguration</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerKind</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerPhase</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerProvider</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerReleaseChannel</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerSpec</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerStatus</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerVariant</a></code>
- <code><a href="./src/resources/runners/runners.ts">SearchMode</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerCreateResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerRetrieveResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerUpdateResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerDeleteResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerCheckAuthenticationForHostResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerCheckRepositoryAccessResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerCreateLogsTokenResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerCreateRunnerTokenResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerListScmOrganizationsResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerParseContextURLResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerSearchRepositoriesResponse</a></code>

Methods:

- <code title="post /gitpod.v1.RunnerService/CreateRunner">client.runners.<a href="./src/resources/runners/runners.ts">create</a>({ ...params }) -> RunnerCreateResponse</code>
- <code title="post /gitpod.v1.RunnerService/GetRunner">client.runners.<a href="./src/resources/runners/runners.ts">retrieve</a>({ ...params }) -> RunnerRetrieveResponse</code>
- <code title="post /gitpod.v1.RunnerService/UpdateRunner">client.runners.<a href="./src/resources/runners/runners.ts">update</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.RunnerService/ListRunners">client.runners.<a href="./src/resources/runners/runners.ts">list</a>({ ...params }) -> RunnersRunnersPage</code>
- <code title="post /gitpod.v1.RunnerService/DeleteRunner">client.runners.<a href="./src/resources/runners/runners.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.RunnerService/CheckAuthenticationForHost">client.runners.<a href="./src/resources/runners/runners.ts">checkAuthenticationForHost</a>({ ...params }) -> RunnerCheckAuthenticationForHostResponse</code>
- <code title="post /gitpod.v1.RunnerService/CheckRepositoryAccess">client.runners.<a href="./src/resources/runners/runners.ts">checkRepositoryAccess</a>({ ...params }) -> RunnerCheckRepositoryAccessResponse</code>
- <code title="post /gitpod.v1.RunnerService/CreateRunnerLogsToken">client.runners.<a href="./src/resources/runners/runners.ts">createLogsToken</a>({ ...params }) -> RunnerCreateLogsTokenResponse</code>
- <code title="post /gitpod.v1.RunnerService/CreateRunnerToken">client.runners.<a href="./src/resources/runners/runners.ts">createRunnerToken</a>({ ...params }) -> RunnerCreateRunnerTokenResponse</code>
- <code title="post /gitpod.v1.RunnerService/ListSCMOrganizations">client.runners.<a href="./src/resources/runners/runners.ts">listScmOrganizations</a>({ ...params }) -> RunnerListScmOrganizationsResponse</code>
- <code title="post /gitpod.v1.RunnerService/ParseContextURL">client.runners.<a href="./src/resources/runners/runners.ts">parseContextURL</a>({ ...params }) -> RunnerParseContextURLResponse</code>
- <code title="post /gitpod.v1.RunnerService/SearchRepositories">client.runners.<a href="./src/resources/runners/runners.ts">searchRepositories</a>({ ...params }) -> RunnerSearchRepositoriesResponse</code>

## Configurations

Types:

- <code><a href="./src/resources/runners/configurations/configurations.ts">EnvironmentClassValidationResult</a></code>
- <code><a href="./src/resources/runners/configurations/configurations.ts">FieldValidationError</a></code>
- <code><a href="./src/resources/runners/configurations/configurations.ts">ScmIntegrationValidationResult</a></code>
- <code><a href="./src/resources/runners/configurations/configurations.ts">ConfigurationValidateResponse</a></code>

Methods:

- <code title="post /gitpod.v1.RunnerConfigurationService/ValidateRunnerConfiguration">client.runners.configurations.<a href="./src/resources/runners/configurations/configurations.ts">validate</a>({ ...params }) -> ConfigurationValidateResponse</code>

### EnvironmentClasses

Types:

- <code><a href="./src/resources/runners/configurations/environment-classes.ts">EnvironmentClassCreateResponse</a></code>
- <code><a href="./src/resources/runners/configurations/environment-classes.ts">EnvironmentClassRetrieveResponse</a></code>
- <code><a href="./src/resources/runners/configurations/environment-classes.ts">EnvironmentClassUpdateResponse</a></code>

Methods:

- <code title="post /gitpod.v1.RunnerConfigurationService/CreateEnvironmentClass">client.runners.configurations.environmentClasses.<a href="./src/resources/runners/configurations/environment-classes.ts">create</a>({ ...params }) -> EnvironmentClassCreateResponse</code>
- <code title="post /gitpod.v1.RunnerConfigurationService/GetEnvironmentClass">client.runners.configurations.environmentClasses.<a href="./src/resources/runners/configurations/environment-classes.ts">retrieve</a>({ ...params }) -> EnvironmentClassRetrieveResponse</code>
- <code title="post /gitpod.v1.RunnerConfigurationService/UpdateEnvironmentClass">client.runners.configurations.environmentClasses.<a href="./src/resources/runners/configurations/environment-classes.ts">update</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.RunnerConfigurationService/ListEnvironmentClasses">client.runners.configurations.environmentClasses.<a href="./src/resources/runners/configurations/environment-classes.ts">list</a>({ ...params }) -> EnvironmentClassesEnvironmentClassesPage</code>

### HostAuthenticationTokens

Types:

- <code><a href="./src/resources/runners/configurations/host-authentication-tokens.ts">HostAuthenticationToken</a></code>
- <code><a href="./src/resources/runners/configurations/host-authentication-tokens.ts">HostAuthenticationTokenSource</a></code>
- <code><a href="./src/resources/runners/configurations/host-authentication-tokens.ts">HostAuthenticationTokenCreateResponse</a></code>
- <code><a href="./src/resources/runners/configurations/host-authentication-tokens.ts">HostAuthenticationTokenRetrieveResponse</a></code>
- <code><a href="./src/resources/runners/configurations/host-authentication-tokens.ts">HostAuthenticationTokenUpdateResponse</a></code>
- <code><a href="./src/resources/runners/configurations/host-authentication-tokens.ts">HostAuthenticationTokenDeleteResponse</a></code>

Methods:

- <code title="post /gitpod.v1.RunnerConfigurationService/CreateHostAuthenticationToken">client.runners.configurations.hostAuthenticationTokens.<a href="./src/resources/runners/configurations/host-authentication-tokens.ts">create</a>({ ...params }) -> HostAuthenticationTokenCreateResponse</code>
- <code title="post /gitpod.v1.RunnerConfigurationService/GetHostAuthenticationToken">client.runners.configurations.hostAuthenticationTokens.<a href="./src/resources/runners/configurations/host-authentication-tokens.ts">retrieve</a>({ ...params }) -> HostAuthenticationTokenRetrieveResponse</code>
- <code title="post /gitpod.v1.RunnerConfigurationService/UpdateHostAuthenticationToken">client.runners.configurations.hostAuthenticationTokens.<a href="./src/resources/runners/configurations/host-authentication-tokens.ts">update</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.RunnerConfigurationService/ListHostAuthenticationTokens">client.runners.configurations.hostAuthenticationTokens.<a href="./src/resources/runners/configurations/host-authentication-tokens.ts">list</a>({ ...params }) -> HostAuthenticationTokensTokensPage</code>
- <code title="post /gitpod.v1.RunnerConfigurationService/DeleteHostAuthenticationToken">client.runners.configurations.hostAuthenticationTokens.<a href="./src/resources/runners/configurations/host-authentication-tokens.ts">delete</a>({ ...params }) -> unknown</code>

### Schema

Types:

- <code><a href="./src/resources/runners/configurations/schema.ts">RunnerConfigurationSchema</a></code>
- <code><a href="./src/resources/runners/configurations/schema.ts">SchemaRetrieveResponse</a></code>

Methods:

- <code title="post /gitpod.v1.RunnerConfigurationService/GetRunnerConfigurationSchema">client.runners.configurations.schema.<a href="./src/resources/runners/configurations/schema.ts">retrieve</a>({ ...params }) -> SchemaRetrieveResponse</code>

### ScmIntegrations

Types:

- <code><a href="./src/resources/runners/configurations/scm-integrations.ts">ScmIntegration</a></code>
- <code><a href="./src/resources/runners/configurations/scm-integrations.ts">ScmIntegrationOAuthConfig</a></code>
- <code><a href="./src/resources/runners/configurations/scm-integrations.ts">ScmIntegrationCreateResponse</a></code>
- <code><a href="./src/resources/runners/configurations/scm-integrations.ts">ScmIntegrationRetrieveResponse</a></code>
- <code><a href="./src/resources/runners/configurations/scm-integrations.ts">ScmIntegrationUpdateResponse</a></code>
- <code><a href="./src/resources/runners/configurations/scm-integrations.ts">ScmIntegrationDeleteResponse</a></code>

Methods:

- <code title="post /gitpod.v1.RunnerConfigurationService/CreateSCMIntegration">client.runners.configurations.scmIntegrations.<a href="./src/resources/runners/configurations/scm-integrations.ts">create</a>({ ...params }) -> ScmIntegrationCreateResponse</code>
- <code title="post /gitpod.v1.RunnerConfigurationService/GetSCMIntegration">client.runners.configurations.scmIntegrations.<a href="./src/resources/runners/configurations/scm-integrations.ts">retrieve</a>({ ...params }) -> ScmIntegrationRetrieveResponse</code>
- <code title="post /gitpod.v1.RunnerConfigurationService/UpdateSCMIntegration">client.runners.configurations.scmIntegrations.<a href="./src/resources/runners/configurations/scm-integrations.ts">update</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.RunnerConfigurationService/ListSCMIntegrations">client.runners.configurations.scmIntegrations.<a href="./src/resources/runners/configurations/scm-integrations.ts">list</a>({ ...params }) -> ScmIntegrationsIntegrationsPage</code>
- <code title="post /gitpod.v1.RunnerConfigurationService/DeleteSCMIntegration">client.runners.configurations.scmIntegrations.<a href="./src/resources/runners/configurations/scm-integrations.ts">delete</a>({ ...params }) -> unknown</code>

## Policies

Types:

- <code><a href="./src/resources/runners/policies.ts">RunnerPolicy</a></code>
- <code><a href="./src/resources/runners/policies.ts">RunnerRole</a></code>
- <code><a href="./src/resources/runners/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/runners/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/runners/policies.ts">PolicyDeleteResponse</a></code>

Methods:

- <code title="post /gitpod.v1.RunnerService/CreateRunnerPolicy">client.runners.policies.<a href="./src/resources/runners/policies.ts">create</a>({ ...params }) -> PolicyCreateResponse</code>
- <code title="post /gitpod.v1.RunnerService/UpdateRunnerPolicy">client.runners.policies.<a href="./src/resources/runners/policies.ts">update</a>({ ...params }) -> PolicyUpdateResponse</code>
- <code title="post /gitpod.v1.RunnerService/ListRunnerPolicies">client.runners.policies.<a href="./src/resources/runners/policies.ts">list</a>({ ...params }) -> RunnerPoliciesPoliciesPage</code>
- <code title="post /gitpod.v1.RunnerService/DeleteRunnerPolicy">client.runners.policies.<a href="./src/resources/runners/policies.ts">delete</a>({ ...params }) -> unknown</code>

# Secrets

Types:

- <code><a href="./src/resources/secrets.ts">Secret</a></code>
- <code><a href="./src/resources/secrets.ts">SecretScope</a></code>
- <code><a href="./src/resources/secrets.ts">SecretCreateResponse</a></code>
- <code><a href="./src/resources/secrets.ts">SecretDeleteResponse</a></code>
- <code><a href="./src/resources/secrets.ts">SecretGetValueResponse</a></code>
- <code><a href="./src/resources/secrets.ts">SecretUpdateValueResponse</a></code>

Methods:

- <code title="post /gitpod.v1.SecretService/CreateSecret">client.secrets.<a href="./src/resources/secrets.ts">create</a>({ ...params }) -> SecretCreateResponse</code>
- <code title="post /gitpod.v1.SecretService/ListSecrets">client.secrets.<a href="./src/resources/secrets.ts">list</a>({ ...params }) -> SecretsSecretsPage</code>
- <code title="post /gitpod.v1.SecretService/DeleteSecret">client.secrets.<a href="./src/resources/secrets.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.SecretService/GetSecretValue">client.secrets.<a href="./src/resources/secrets.ts">getValue</a>({ ...params }) -> SecretGetValueResponse</code>
- <code title="post /gitpod.v1.SecretService/UpdateSecretValue">client.secrets.<a href="./src/resources/secrets.ts">updateValue</a>({ ...params }) -> unknown</code>

# Usage

Types:

- <code><a href="./src/resources/usage.ts">EnvironmentUsageRecord</a></code>

Methods:

- <code title="post /gitpod.v1.UsageService/ListEnvironmentUsageRecords">client.usage.<a href="./src/resources/usage.ts">listEnvironmentRuntimeRecords</a>({ ...params }) -> EnvironmentUsageRecordsRecordsPage</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">User</a></code>
- <code><a href="./src/resources/users/users.ts">UserDeleteUserResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserGetAuthenticatedUserResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserGetUserResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserSetSuspendedResponse</a></code>

Methods:

- <code title="post /gitpod.v1.UserService/DeleteUser">client.users.<a href="./src/resources/users/users.ts">deleteUser</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.UserService/GetAuthenticatedUser">client.users.<a href="./src/resources/users/users.ts">getAuthenticatedUser</a>({ ...params }) -> UserGetAuthenticatedUserResponse</code>
- <code title="post /gitpod.v1.UserService/GetUser">client.users.<a href="./src/resources/users/users.ts">getUser</a>({ ...params }) -> UserGetUserResponse</code>
- <code title="post /gitpod.v1.UserService/SetSuspended">client.users.<a href="./src/resources/users/users.ts">setSuspended</a>({ ...params }) -> unknown</code>

## Dotfiles

Types:

- <code><a href="./src/resources/users/dotfiles.ts">DotfilesConfiguration</a></code>
- <code><a href="./src/resources/users/dotfiles.ts">DotfileGetResponse</a></code>
- <code><a href="./src/resources/users/dotfiles.ts">DotfileSetResponse</a></code>

Methods:

- <code title="post /gitpod.v1.UserService/GetDotfilesConfiguration">client.users.dotfiles.<a href="./src/resources/users/dotfiles.ts">get</a>({ ...params }) -> DotfileGetResponse</code>
- <code title="post /gitpod.v1.UserService/SetDotfilesConfiguration">client.users.dotfiles.<a href="./src/resources/users/dotfiles.ts">set</a>({ ...params }) -> unknown</code>

## Pats

Types:

- <code><a href="./src/resources/users/pats.ts">PersonalAccessToken</a></code>
- <code><a href="./src/resources/users/pats.ts">PatDeleteResponse</a></code>
- <code><a href="./src/resources/users/pats.ts">PatGetResponse</a></code>

Methods:

- <code title="post /gitpod.v1.UserService/ListPersonalAccessTokens">client.users.pats.<a href="./src/resources/users/pats.ts">list</a>({ ...params }) -> PersonalAccessTokensPersonalAccessTokensPage</code>
- <code title="post /gitpod.v1.UserService/DeletePersonalAccessToken">client.users.pats.<a href="./src/resources/users/pats.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.UserService/GetPersonalAccessToken">client.users.pats.<a href="./src/resources/users/pats.ts">get</a>({ ...params }) -> PatGetResponse</code>
