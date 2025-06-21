# MCP (Model Context Protocol) Development Guidelines

## 🎯 OVERVIEW

**Model Context Protocol (MCP)** provides Claude with direct access to development tools, enabling seamless integration between AI assistance and development environments. This document establishes best practices for using MCP tools effectively in development workflows.

## 🛠️ AVAILABLE MCP TOOLS

### **File System Operations**
- `read_file` - Read file contents
- `write_file` - Write content to files
- `list_directory` - List directory contents
- `create_directory` - Create new directories
- `delete_file` - Delete files or directories

### **Cursor IDE Integration**
- `open_cursor` - Launch Cursor IDE with project
- `open_file_in_cursor` - Open specific files at line/column
- `create_new_file` - Create and auto-open files in IDE
- `execute_cursor_command` - Execute IDE commands
- `run_terminal_command_in_cursor` - Run commands in IDE terminal
- `search_in_cursor` - IDE-wide search and replace
- `install_cursor_extension` - Manage IDE extensions
- `get_cursor_workspace` - Get workspace information
- `focus_cursor` - Bring IDE to foreground

### **Terminal Operations**
- `execute_command` - Run shell commands
- `change_directory` - Change working directory
- `get_current_directory` - Get current path
- `get_environment` - Access environment variables
- `list_processes` - View running processes

### **Browser Automation**
- `navigate_to_url` - Open web pages
- `get_page_content` - Extract page content
- `click_element` - Interact with page elements
- `fill_input` - Fill form fields
- `take_screenshot` - Capture page screenshots
- `execute_javascript` - Run custom JavaScript
- `wait_for_element` - Wait for page elements
- `close_browser` - Close browser instances

## 🎯 MCP TOOL RELATIONSHIPS & COMPLEMENTARITY

### **How MCP Tools Complement Each Other**

#### **File Access MCP ↔ Cursor MCP**
```
File Access MCP: Raw file operations
├── Basic read/write operations
├── Directory management
└── System-level file handling

Cursor MCP: IDE-aware file operations
├── Open files at specific lines/columns
├── Workspace-contextual operations
├── IDE feature integration
└── Development environment awareness

RELATIONSHIP: Cursor MCP provides intelligent, context-aware layer over File MCP
```

#### **Terminal MCP ↔ Cursor MCP**
```
Terminal MCP: System-level commands
├── Global tool installation
├── System administration
├── Cross-platform operations
└── Independent process execution

Cursor MCP Terminal: IDE-integrated commands
├── Project-specific environment
├── Workspace variable inheritance
├── IDE output integration
└── Development workflow commands

RELATIONSHIP: Cursor terminal inherits project context, system terminal for global ops
```

#### **Browser MCP ↔ Development MCPs**
```
Browser MCP: Web testing & validation
├── Test application functionality
├── Access web-based tools
├── User experience validation
└── External resource access

Development MCPs: Build & deploy applications
├── Create web applications
├── Configure build systems
├── Manage development environment
└── Generate deployable code

RELATIONSHIP: Browser MCP tests what Development MCPs create
```

## 📋 BEST PRACTICES FOR MCP USAGE

### **1. Workflow Orchestration Pattern** ⭐ **RECOMMENDED**

```markdown
# Optimal Development Workflow Using All MCPs

## Phase 1: Project Analysis
1. File MCP: Analyze project structure
   - `list_directory` to understand codebase
   - `read_file` for key configuration files

## Phase 2: Environment Setup  
2. Cursor MCP: Open development environment
   - `open_cursor(projectPath)` to launch IDE
   - `get_cursor_workspace()` to understand context
   - `install_cursor_extension()` for needed tools

## Phase 3: Development Work
3. Cursor MCP: Context-aware development
   - `open_file_in_cursor(file, line)` for precise navigation
   - `search_in_cursor()` for codebase-wide operations
   - `run_terminal_command_in_cursor()` for dev commands

## Phase 4: System Operations
4. Terminal MCP: Global operations when needed
   - `execute_command()` for system-level tasks
   - Global package installations
   - Cross-project operations

## Phase 5: Testing & Validation
5. Browser MCP: Test the results
   - `navigate_to_url()` to test applications
   - `get_page_content()` to validate output
   - `take_screenshot()` for documentation
```

### **2. Context-Aware Development** 🎯 **CRITICAL**

```typescript
// BEST PRACTICE: Always understand context first
1. get_cursor_workspace() - Check current project state
2. read_file("package.json") - Understand project dependencies  
3. list_directory("src/") - Analyze code structure
4. THEN proceed with modifications using appropriate MCP tools

// ANTI-PATTERN: Making changes without context
❌ Directly modifying files without understanding project structure
❌ Running commands without checking current environment
❌ Using system tools when IDE tools are more appropriate
```

### **3. Environment Consistency** ⚖️ **ESSENTIAL**

```bash
# USE Cursor's integrated terminal for:
run_terminal_command_in_cursor("npm run dev")     # ✅ Project commands
run_terminal_command_in_cursor("npm test")        # ✅ Development workflows  
run_terminal_command_in_cursor("git status")      # ✅ Project version control

# USE System terminal for:
execute_command("brew install node")              # ✅ Global installations
execute_command("sudo systemctl restart nginx")   # ✅ System administration
execute_command("docker system prune")            # ✅ System maintenance
```

### **4. Multi-File Operations Strategy** 📁 **ADVANCED**

```python
# PROVEN PATTERN: Systematic multi-file operations
def perform_codebase_refactoring():
    # 1. Analysis Phase
    workspace = get_cursor_workspace()
    file_list = list_directory("src/components/")
    
    # 2. Search Phase  
    search_results = search_in_cursor("TODO", caseSensitive=False)
    
    # 3. Modification Phase
    for result in search_results:
        open_file_in_cursor(result.file, result.line)
        # Make targeted changes via File MCP
        write_file(result.file, updated_content)
    
    # 4. Validation Phase
    run_terminal_command_in_cursor("npm test")
    
    # 5. Browser Testing
    navigate_to_url("http://localhost:3000")
    take_screenshot("after_refactoring.png")

# SUCCESS METRICS: Maintains context, systematic approach, comprehensive validation
```

## 🚨 CRITICAL MCP USAGE RULES

### **Rule 1: Tool Selection Priority** 🎯 **MANDATORY**

```
PRIORITY ORDER for file operations:
1. Cursor MCP - When working within a development project
2. File MCP - When working outside IDE context or need raw operations
3. Terminal MCP - When file operations are part of larger system commands

PRIORITY ORDER for command execution:
1. Cursor Terminal - For development/project commands
2. System Terminal - For global/system commands
3. Browser JavaScript - For web-based operations only
```

### **Rule 2: Context Preservation** 🔒 **ESSENTIAL**

```typescript
// ALWAYS check context before operations
❌ WRONG: Assume current directory or project state
✅ RIGHT: Verify context first

// Example:
const workspace = get_cursor_workspace();
const currentDir = get_current_directory();
const projectRoot = "/Users/username/project";

// Make decisions based on actual context
if (workspace?.projectPath === projectRoot) {
    // Use Cursor MCP tools
    run_terminal_command_in_cursor("npm run build");
} else {
    // Use system tools or navigate appropriately
    execute_command(`cd ${projectRoot} && npm run build`);
}
```

### **Rule 3: Error Handling & Fallbacks** 🛡️ **REQUIRED**

```typescript
// PATTERN: Graceful degradation between MCP tools
try {
    // Prefer Cursor MCP for development operations
    run_terminal_command_in_cursor("npm install");
} catch (error) {
    console.log("Cursor not available, using system terminal");
    execute_command("cd /project/path && npm install");
}

// PATTERN: Validate operations across tools
const buildSuccess = run_terminal_command_in_cursor("npm run build");
if (buildSuccess) {
    navigate_to_url("http://localhost:3000"); // Test with browser
    take_screenshot("build_verification.png");
}
```

### **Rule 4: Documentation Integration** 📝 **BEST PRACTICE**

```markdown
# ALWAYS document MCP tool decisions in project documentation

## MCP Tool Usage Log
- **Cursor MCP**: Used for all TypeScript file editing and IDE navigation
- **Terminal MCP**: Used for global package installations only  
- **Browser MCP**: Used for testing localhost:3000 functionality
- **File MCP**: Used for README updates and documentation management

## Rationale
- Cursor MCP chosen for development to maintain workspace context
- Terminal MCP for system operations to avoid permission issues
- Browser MCP for user experience validation
```

## 🎨 MCP USAGE PATTERNS BY PROJECT TYPE

### **React/TypeScript Projects** ⚛️

```typescript
// OPTIMAL MCP WORKFLOW
1. open_cursor(projectPath) - Launch IDE with project
2. get_cursor_workspace() - Understand project structure
3. open_file_in_cursor("package.json", 1) - Check dependencies
4. run_terminal_command_in_cursor("npm install") - Install deps
5. search_in_cursor("TODO") - Find development tasks
6. run_terminal_command_in_cursor("npm run dev") - Start dev server
7. navigate_to_url("http://localhost:5173") - Test application
8. take_screenshot("development_progress.png") - Document state
```

### **Documentation Projects** 📖

```markdown
# OPTIMAL MCP WORKFLOW
1. list_directory("docs/") - Analyze documentation structure
2. read_file("docs/README.md") - Understand current state
3. open_cursor(projectPath) - Open in IDE for editing
4. create_new_file("docs/NEW_SECTION.md") - Add new documentation
5. search_in_cursor("TODO") - Find documentation gaps
6. write_file() operations - Update multiple documents
7. Browser MCP - Validate rendered documentation (if web-based)
```

### **Full-Stack Applications** 🌐

```bash
# COMPLEX MCP ORCHESTRATION
Frontend Development:
- Cursor MCP: React/TypeScript development
- Terminal MCP (Cursor): npm commands, testing
- Browser MCP: Frontend testing

Backend Development:  
- Cursor MCP: API development and debugging
- Terminal MCP (System): Database operations, Docker
- Terminal MCP (Cursor): Server startup, logs

Integration Testing:
- Browser MCP: End-to-end testing
- Terminal MCP: Database seeding, test automation
- File MCP: Log analysis and result documentation
```

## 🔄 MCP WORKFLOW TEMPLATES

### **Template 1: New Feature Development**

```python
def new_feature_development_workflow():
    """Complete workflow for adding new features using MCP tools"""
    
    # 1. ENVIRONMENT SETUP
    open_cursor(PROJECT_PATH)
    workspace = get_cursor_workspace()
    
    # 2. ANALYSIS PHASE
    search_in_cursor("feature_name")  # Check existing implementations
    open_file_in_cursor("src/types.ts")  # Review type definitions
    
    # 3. DEVELOPMENT PHASE
    create_new_file("src/components/NewFeature.tsx")
    open_file_in_cursor("src/components/NewFeature.tsx", 1)
    # Implement feature using File MCP write operations
    
    # 4. TESTING PHASE
    run_terminal_command_in_cursor("npm test")
    run_terminal_command_in_cursor("npm run dev")
    
    # 5. VALIDATION PHASE
    navigate_to_url("http://localhost:3000/new-feature")
    take_screenshot("new_feature_demo.png")
    
    # 6. DOCUMENTATION
    open_file_in_cursor("README.md")
    # Update documentation via File MCP
```

### **Template 2: Bug Investigation & Fix**

```python
def bug_investigation_workflow():
    """Systematic bug investigation using all MCP tools"""
    
    # 1. REPRODUCE BUG
    navigate_to_url("http://localhost:3000/buggy-page")
    take_screenshot("bug_reproduction.png")
    get_page_content()  # Analyze error state
    
    # 2. CODE INVESTIGATION
    open_cursor(PROJECT_PATH)
    search_in_cursor("error_message")  # Find relevant code
    search_in_cursor("component_name")  # Locate bug source
    
    # 3. LOG ANALYSIS
    run_terminal_command_in_cursor("npm run dev")  # Check console logs
    execute_command("tail -f /var/log/application.log")  # System logs
    
    # 4. FIX IMPLEMENTATION
    open_file_in_cursor("src/buggy-component.tsx", error_line)
    # Apply fix using File MCP
    
    # 5. VERIFICATION
    run_terminal_command_in_cursor("npm test")
    navigate_to_url("http://localhost:3000/buggy-page")
    take_screenshot("bug_fixed.png")
```

### **Template 3: Documentation Update**

```python
def documentation_update_workflow():
    """Comprehensive documentation update using MCP tools"""
    
    # 1. ANALYSIS
    list_directory("docs/")
    read_file("docs/index.md")  # Current documentation state
    
    # 2. IDE SETUP
    open_cursor(PROJECT_PATH)
    get_cursor_workspace()
    
    # 3. CONTENT SEARCH
    search_in_cursor("outdated_information")
    search_in_cursor("TODO.*documentation")
    
    # 4. SYSTEMATIC UPDATES
    for doc_file in documentation_files:
        open_file_in_cursor(f"docs/{doc_file}")
        # Update content using File MCP write operations
    
    # 5. VALIDATION
    run_terminal_command_in_cursor("npm run docs:build")  # If docs build exists
    navigate_to_url("http://localhost:3001")  # If docs server exists
    take_screenshot("updated_documentation.png")
```

## 📊 MCP PERFORMANCE OPTIMIZATION

### **Tool Selection Optimization** ⚡

```typescript
// PERFORMANCE RULE: Choose the most efficient tool for each operation
const MCP_PERFORMANCE_GUIDELINES = {
    fileOperations: {
        single_file_read: "File MCP read_file()",           // Fastest
        multiple_file_read: "Cursor MCP + search",          // Context-aware
        large_file_operations: "Terminal MCP commands",     // Memory efficient
        file_creation_in_project: "Cursor MCP create_new_file()" // IDE integration
    },
    
    commandExecution: {
        development_commands: "Cursor terminal",            // Environment consistency
        system_commands: "Terminal MCP",                    // Direct access
        repeated_commands: "Terminal MCP with scripts",     // Efficiency
        interactive_commands: "Cursor terminal"             // User interaction
    },
    
    browserOperations: {
        simple_navigation: "navigate_to_url()",            // Basic testing
        complex_interaction: "Browser automation sequence", // Full workflows  
        screenshot_documentation: "take_screenshot()",      // Visual validation
        content_extraction: "get_page_content()"           // Data analysis
    }
};
```

### **Batch Operations Strategy** 📦

```python
# EFFICIENT: Batch similar operations together
def batch_file_updates():
    """Optimize multiple file operations"""
    
    # 1. BATCH ANALYSIS
    file_list = list_directory("src/components/")
    search_results = search_in_cursor("deprecated_pattern")
    
    # 2. BATCH PROCESSING
    for file_path in files_to_update:
        content = read_file(file_path)
        updated_content = apply_updates(content)
        write_file(file_path, updated_content)
    
    # 3. BATCH VALIDATION
    run_terminal_command_in_cursor("npm test")
    run_terminal_command_in_cursor("npm run type-check")
    
    # AVOID: Opening/closing Cursor for each file (inefficient)
    # AVOID: Individual terminal commands for each file (slow)
```

## 🔧 TROUBLESHOOTING MCP ISSUES

### **Common Issues & Solutions** 🚨

#### **Issue 1: Cursor MCP Not Available**
```typescript
// PROBLEM: Cursor IDE not running or accessible
// SOLUTION: Fallback pattern
try {
    open_cursor(projectPath);
    get_cursor_workspace();
} catch (error) {
    console.log("Cursor unavailable, using alternative tools");
    // Use File MCP + Terminal MCP combination
    execute_command(`code ${projectPath}`);  // VS Code fallback
    // Or continue with File MCP operations
}
```

#### **Issue 2: Terminal Command Failures**
```bash
# PROBLEM: Commands fail in Cursor terminal
# SOLUTION: Environment verification and fallback

# Verify Cursor terminal environment
run_terminal_command_in_cursor("pwd")
run_terminal_command_in_cursor("echo $PATH")

# If issues persist, use system terminal
execute_command("cd /full/project/path && npm install")
```

#### **Issue 3: File Access Permission Issues**
```typescript
// PROBLEM: File operations fail due to permissions
// SOLUTION: Strategic tool selection

// For system files: Use Terminal MCP with appropriate permissions
execute_command("sudo chown user:group /path/to/file");

// For project files: Use Cursor MCP (inherits IDE permissions)
create_new_file("src/components/Component.tsx");

// For documentation: Use File MCP (direct file access)
write_file("docs/README.md", content);
```

#### **Issue 4: Browser Automation Failures**
```typescript
// PROBLEM: Browser MCP commands timeout or fail
// SOLUTION: Systematic troubleshooting

// 1. Verify target exists
navigate_to_url("http://localhost:3000");
wait_for_element("body", "visible", 10000);

// 2. Use proper selectors
const element_exists = wait_for_element(".target-class", "visible");
if (element_exists) {
    click_element(".target-class");
}

// 3. Fallback to JavaScript execution
execute_javascript("document.querySelector('.target').click()");
```

## 🎯 PROJECT-SPECIFIC MCP INTEGRATION

### **For ChemPrep9 Project** 🧪

```typescript
// OPTIMIZED MCP USAGE for Chemistry Learning App
const CHEMPREP_MCP_STRATEGY = {
    development: {
        primary_tool: "Cursor MCP",
        rationale: "React/TypeScript project with complex component structure",
        commands: [
            "open_cursor('/Users/matiasmirvois/Desktop/chemprep9-online-course')",
            "get_cursor_workspace()",
            "search_in_cursor('TODO')",
            "run_terminal_command_in_cursor('npm run dev')"
        ]
    },
    
    content_updates: {
        lesson_files: "File MCP for direct content editing",
        component_files: "Cursor MCP for TypeScript components", 
        documentation: "File MCP for markdown files",
        rationale: "Mixed approach based on file type and context needs"
    },
    
    testing_validation: {
        unit_tests: "Cursor terminal (npm test)",
        integration_tests: "System terminal (broader scope)",
        user_testing: "Browser MCP (localhost:5173)",
        visual_validation: "Browser screenshots"
    },
    
    deployment_preparation: {
        build_process: "Cursor terminal (project context)",
        optimization: "System terminal (system tools)",
        validation: "Browser MCP (production testing)"
    }
};
```

## 📚 ADVANCED MCP PATTERNS

### **Pattern 1: Cross-Tool State Management** 🔄

```typescript
interface MCPWorkflowState {
    currentProject: string;
    openFiles: string[];
    runningProcesses: string[];
    browserTabs: string[];
}

class MCPWorkflowManager {
    private state: MCPWorkflowState;
    
    async initializeWorkflow(projectPath: string) {
        // 1. Setup development environment
        await open_cursor(projectPath);
        this.state.currentProject = projectPath;
        
        // 2. Capture initial state
        const workspace = await get_cursor_workspace();
        this.state.openFiles = workspace.openFiles || [];
        
        // 3. Start development server
        await run_terminal_command_in_cursor("npm run dev");
        this.state.runningProcesses.push("dev-server");
        
        // 4. Open browser for testing
        await navigate_to_url("http://localhost:5173");
        this.state.browserTabs.push("http://localhost:5173");
    }
    
    async cleanupWorkflow() {
        // Systematic cleanup across all MCP tools
        for (const process of this.state.runningProcesses) {
            await execute_command(`pkill -f ${process}`);
        }
        await close_browser();
        // Cursor cleanup handled by IDE
    }
}
```

### **Pattern 2: Intelligent Tool Routing** 🧠

```typescript
class IntelligentMCPRouter {
    
    async routeFileOperation(operation: string, filePath: string) {
        const fileExtension = path.extname(filePath);
        const isInProject = filePath.includes(this.projectRoot);
        
        if (isInProject && ['.ts', '.tsx', '.js', '.jsx'].includes(fileExtension)) {
            // Use Cursor MCP for code files in project
            return await open_file_in_cursor(filePath);
        } else if (fileExtension === '.md') {
            // Use File MCP for markdown (documentation focus)
            return await read_file(filePath);
        } else {
            // Use appropriate tool based on context
            return await this.determineOptimalTool(operation, filePath);
        }
    }
    
    async routeCommandExecution(command: string) {
        const isProjectCommand = ['npm', 'yarn', 'git'].some(cmd => 
            command.startsWith(cmd)
        );
        
        if (isProjectCommand && this.cursorAvailable) {
            return await run_terminal_command_in_cursor(command);
        } else {
            return await execute_command(command);
        }
    }
}
```

---

## 🏆 MCP SUCCESS METRICS

### **Efficiency Indicators** 📈

- **Context Preservation**: >95% operations maintain proper project context
- **Tool Selection Accuracy**: Optimal tool chosen for >90% of operations
- **Error Reduction**: <5% command failures due to incorrect tool selection
- **Development Velocity**: Measurable acceleration in development tasks
- **Code Quality**: Maintained or improved with MCP-assisted development

### **Quality Indicators** ✅

- **Consistent Environment**: All team members use same MCP patterns
- **Documentation Currency**: MCP usage documented and up-to-date
- **Fallback Reliability**: Graceful degradation when tools unavailable
- **Integration Seamlessness**: Smooth workflow across all MCP tools

---

**Document Created**: June 8, 2025  
**Purpose**: Establish comprehensive MCP usage guidelines for development projects  
**Scope**: All MCP tools (File, Cursor, Terminal, Browser) with focus on complementarity  
**Validation**: Based on successful ChemPrep9 project development experience  
**Next Review**: After integration with existing project workflows
