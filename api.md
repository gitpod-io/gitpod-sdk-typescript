# Shared

Types:

- <code><a href="./src/resources/shared.ts">AutomationTrigge</a></code>
- <code><a href="./src/resources/shared.ts">EnvironmentClass</a></code>
- <code><a href="./src/resources/shared.ts">FieldValue</a></code>
- <code><a href="./src/resources/shared.ts">OrganizationRole</a></code>
- <code><a href="./src/resources/shared.ts">Principal</a></code>
- <code><a href="./src/resources/shared.ts">RunsOn</a></code>
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

Methods:

- <code title="post /gitpod.v1.AccountService/GetAccount">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>({ ...params }) -> AccountRetrieveResponse</code>
- <code title="post /gitpod.v1.AccountService/DeleteAccount">client.accounts.<a href="./src/resources/accounts.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.AccountService/GetSSOLoginURL">client.accounts.<a href="./src/resources/accounts.ts">getSSOLoginURL</a>({ ...params }) -> AccountGetSSOLoginURLResponse</code>
- <code title="post /gitpod.v1.AccountService/ListLoginProviders">client.accounts.<a href="./src/resources/accounts.ts">listLoginProviders</a>({ ...params }) -> LoginProvidersLoginProvidersPage</code>

# Editors

Types:

- <code><a href="./src/resources/editors.ts">Editor</a></code>
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
- <code><a href="./src/resources/environments/environments.ts">EnvironmentSpec</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentStatus</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentCreateResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentRetrieveResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentUpdateResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentDeleteResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentCreateFromProjectResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentCreateLogsTokenResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentMarkActiveResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentStartResponse</a></code>
- <code><a href="./src/resources/environments/environments.ts">EnvironmentStopResponse</a></code>

Methods:

- <code title="post /gitpod.v1.EnvironmentService/CreateEnvironment">client.environments.<a href="./src/resources/environments/environments.ts">create</a>({ ...params }) -> EnvironmentCreateResponse</code>
- <code title="post /gitpod.v1.EnvironmentService/GetEnvironment">client.environments.<a href="./src/resources/environments/environments.ts">retrieve</a>({ ...params }) -> EnvironmentRetrieveResponse</code>
- <code title="post /gitpod.v1.EnvironmentService/UpdateEnvironment">client.environments.<a href="./src/resources/environments/environments.ts">update</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentService/ListEnvironments">client.environments.<a href="./src/resources/environments/environments.ts">list</a>({ ...params }) -> EnvironmentsEnvironmentsPage</code>
- <code title="post /gitpod.v1.EnvironmentService/DeleteEnvironment">client.environments.<a href="./src/resources/environments/environments.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentService/CreateEnvironmentFromProject">client.environments.<a href="./src/resources/environments/environments.ts">createFromProject</a>({ ...params }) -> EnvironmentCreateFromProjectResponse</code>
- <code title="post /gitpod.v1.EnvironmentService/CreateEnvironmentLogsToken">client.environments.<a href="./src/resources/environments/environments.ts">createLogsToken</a>({ ...params }) -> EnvironmentCreateLogsTokenResponse</code>
- <code title="post /gitpod.v1.EnvironmentService/MarkEnvironmentActive">client.environments.<a href="./src/resources/environments/environments.ts">markActive</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentService/StartEnvironment">client.environments.<a href="./src/resources/environments/environments.ts">start</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.EnvironmentService/StopEnvironment">client.environments.<a href="./src/resources/environments/environments.ts">stop</a>({ ...params }) -> unknown</code>

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

# Events

Types:

- <code><a href="./src/resources/events.ts">ResourceOperation</a></code>
- <code><a href="./src/resources/events.ts">ResourceType</a></code>
- <code><a href="./src/resources/events.ts">EventListResponse</a></code>
- <code><a href="./src/resources/events.ts">EventWatchResponse</a></code>

Methods:

- <code title="post /gitpod.v1.EventService/ListAuditLogs">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> EventListResponsesEntriesPage</code>
- <code title="post /gitpod.v1.EventService/WatchEvents">client.events.<a href="./src/resources/events.ts">watch</a>({ ...params }) -> JSONLDecoder&lt;EventWatchResponse&gt;</code>

# Groups

Types:

- <code><a href="./src/resources/groups.ts">Group</a></code>

Methods:

- <code title="post /gitpod.v1.GroupService/ListGroups">client.groups.<a href="./src/resources/groups.ts">list</a>({ ...params }) -> GroupsGroupsPage</code>

# Identity

Types:

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
- <code><a href="./src/resources/organizations/organizations.ts">Scope</a></code>
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
- <code title="post /gitpod.v1.OrganizationService/ListOrganizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">list</a>({ ...params }) -> OrganizationsOrganizationsPage</code>
- <code title="post /gitpod.v1.OrganizationService/DeleteOrganization">client.organizations.<a href="./src/resources/organizations/organizations.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.OrganizationService/JoinOrganization">client.organizations.<a href="./src/resources/organizations/organizations.ts">join</a>({ ...params }) -> OrganizationJoinResponse</code>
- <code title="post /gitpod.v1.OrganizationService/LeaveOrganization">client.organizations.<a href="./src/resources/organizations/organizations.ts">leave</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.OrganizationService/ListMembers">client.organizations.<a href="./src/resources/organizations/organizations.ts">listMembers</a>({ ...params }) -> OrganizationMembersMembersPage</code>
- <code title="post /gitpod.v1.OrganizationService/SetRole">client.organizations.<a href="./src/resources/organizations/organizations.ts">setRole</a>({ ...params }) -> unknown</code>

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

## SSOConfigurations

Types:

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

# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">EnvironmentInitializer</a></code>
- <code><a href="./src/resources/projects/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectEnvironmentClass</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectMetadata</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectUpdateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectCreateFromEnvironmentResponse</a></code>

Methods:

- <code title="post /gitpod.v1.ProjectService/CreateProject">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="post /gitpod.v1.ProjectService/GetProject">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>({ ...params }) -> ProjectRetrieveResponse</code>
- <code title="post /gitpod.v1.ProjectService/UpdateProject">client.projects.<a href="./src/resources/projects/projects.ts">update</a>({ ...params }) -> ProjectUpdateResponse</code>
- <code title="post /gitpod.v1.ProjectService/ListProjects">client.projects.<a href="./src/resources/projects/projects.ts">list</a>({ ...params }) -> ProjectsProjectsPage</code>
- <code title="post /gitpod.v1.ProjectService/DeleteProject">client.projects.<a href="./src/resources/projects/projects.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.ProjectService/CreateProjectFromEnvironment">client.projects.<a href="./src/resources/projects/projects.ts">createFromEnvironment</a>({ ...params }) -> ProjectCreateFromEnvironmentResponse</code>

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

- <code><a href="./src/resources/runners/runners.ts">Runner</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerCapability</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerConfiguration</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerKind</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerPhase</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerProvider</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerReleaseChannel</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerSpec</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerStatus</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerCreateResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerRetrieveResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerUpdateResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerDeleteResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerCheckAuthenticationForHostResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerCreateRunnerTokenResponse</a></code>
- <code><a href="./src/resources/runners/runners.ts">RunnerParseContextURLResponse</a></code>

Methods:

- <code title="post /gitpod.v1.RunnerService/CreateRunner">client.runners.<a href="./src/resources/runners/runners.ts">create</a>({ ...params }) -> RunnerCreateResponse</code>
- <code title="post /gitpod.v1.RunnerService/GetRunner">client.runners.<a href="./src/resources/runners/runners.ts">retrieve</a>({ ...params }) -> RunnerRetrieveResponse</code>
- <code title="post /gitpod.v1.RunnerService/UpdateRunner">client.runners.<a href="./src/resources/runners/runners.ts">update</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.RunnerService/ListRunners">client.runners.<a href="./src/resources/runners/runners.ts">list</a>({ ...params }) -> RunnersRunnersPage</code>
- <code title="post /gitpod.v1.RunnerService/DeleteRunner">client.runners.<a href="./src/resources/runners/runners.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.RunnerService/CheckAuthenticationForHost">client.runners.<a href="./src/resources/runners/runners.ts">checkAuthenticationForHost</a>({ ...params }) -> RunnerCheckAuthenticationForHostResponse</code>
- <code title="post /gitpod.v1.RunnerService/CreateRunnerToken">client.runners.<a href="./src/resources/runners/runners.ts">createRunnerToken</a>({ ...params }) -> RunnerCreateRunnerTokenResponse</code>
- <code title="post /gitpod.v1.RunnerService/ParseContextURL">client.runners.<a href="./src/resources/runners/runners.ts">parseContextURL</a>({ ...params }) -> RunnerParseContextURLResponse</code>

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

# Users

Types:

- <code><a href="./src/resources/users/users.ts">User</a></code>
- <code><a href="./src/resources/users/users.ts">UserGetAuthenticatedUserResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserSetSuspendedResponse</a></code>

Methods:

- <code title="post /gitpod.v1.UserService/GetAuthenticatedUser">client.users.<a href="./src/resources/users/users.ts">getAuthenticatedUser</a>({ ...params }) -> UserGetAuthenticatedUserResponse</code>
- <code title="post /gitpod.v1.UserService/SetSuspended">client.users.<a href="./src/resources/users/users.ts">setSuspended</a>({ ...params }) -> unknown</code>

## Pats

Types:

- <code><a href="./src/resources/users/pats.ts">PersonalAccessToken</a></code>
- <code><a href="./src/resources/users/pats.ts">PatDeleteResponse</a></code>
- <code><a href="./src/resources/users/pats.ts">PatGetResponse</a></code>

Methods:

- <code title="post /gitpod.v1.UserService/ListPersonalAccessTokens">client.users.pats.<a href="./src/resources/users/pats.ts">list</a>({ ...params }) -> PersonalAccessTokensPersonalAccessTokensPage</code>
- <code title="post /gitpod.v1.UserService/DeletePersonalAccessToken">client.users.pats.<a href="./src/resources/users/pats.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /gitpod.v1.UserService/GetPersonalAccessToken">client.users.pats.<a href="./src/resources/users/pats.ts">get</a>({ ...params }) -> PatGetResponse</code>
