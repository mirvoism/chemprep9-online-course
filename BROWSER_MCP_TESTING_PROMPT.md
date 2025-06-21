# Browser MCP Chemistry App Testing Prompt

## 🎯 Mission: Continue Chemistry App Unit Testing

You are tasked with systematically testing the ChemPrep9 chemistry learning application using Browser MCP. This is a continuation of comprehensive testing that started with Unit 1.

### **Current Status**
- **Dev Server**: Running on http://localhost:5173
- **Browser MCP**: Configured and functional
- **Unit 1**: Tested with minor SVG issue remaining
- **Units 2-12**: Require comprehensive validation
- **Priority Units**: 6, 7, 8, 9, 11, 12 (recently fixed)

---

## 🛠️ Pre-Testing Setup

### **1. Verify Environment**
```bash
# Check if dev server is running
curl -I http://localhost:5173

# If not running, start it:
cd /Users/matiasmirvois/Desktop/chemprep9-online-course
npm run dev
```

### **2. Confirm Browser MCP**
```javascript
// Test basic Browser MCP functionality
browser_navigate("http://localhost:5173")
browser_snapshot()
```

### **3. Review Previous Work**
- Read: `/Users/matiasmirvois/Desktop/chemprep9-online-course/CHEMISTRY_APP_TESTING_LOG.md`
- Check: Unit 1 backup file `c1l1Enhanced.ts.backup-20250609-224851`

---

## 📋 Systematic Testing Protocol

### **Phase 1: Quick Smoke Test (15 minutes)**

Execute this rapid validation across all units:

```javascript
// 1. Navigate to homepage
browser_navigate("http://localhost:5173")
browser_screenshot()  // Capture homepage

// 2. Verify all 12 units visible
browser_snapshot()    // Get unit card structure

// 3. Test 3 sample units (mix of old working + recently fixed)
// Unit 2 (baseline), Unit 7 (recently fixed), Unit 11 (recently fixed)

for each test unit:
  browser_click(element="Unit X card", ref="[snapshot_ref]")
  browser_wait(time=2)
  browser_screenshot()    // Capture intro page
  browser_click(element="Start Learning →", ref="[ref]")
  browser_wait(time=3)
  browser_screenshot()    // Capture lesson content
  browser_click(element="← Back to Course Overview", ref="[ref]")
```

**Smoke Test Success Criteria:**
- [ ] All 12 units visible on homepage
- [ ] Sample units load without errors
- [ ] Navigation works smoothly
- [ ] No JavaScript console errors

### **Phase 2: Detailed Unit Testing (2+ hours)**

For each unit (starting with Unit 2), execute this comprehensive test:

```javascript
// Navigate to specific unit
browser_navigate("http://localhost:5173")
browser_click(element="Unit [X] card", ref="[ref]")

// Test 1: Basic Loading
browser_wait(time=2)
browser_screenshot()  // Intro page
browser_click(element="Start Learning →", ref="[ref]")
browser_wait(time=3)
browser_screenshot()  // Main content

// Test 2: Content Structure Analysis
browser_snapshot()    // Get full content structure

// Check for:
// - Proper HTML rendering (no raw markdown ####, **, etc.)
// - Mathematical formulas display correctly
// - Chemical equations properly formatted
// - Learning objectives visible
// - Navigation elements present

// Test 3: SVG Validation
// Scroll through content to capture all SVGs
browser_press_key("PageDown") // Repeat as needed
browser_screenshot()         // Capture each section with SVGs

// For each SVG found, document:
// - Does it load without errors?
// - Are titles/labels fully visible (not cut off)?
// - Are molecular structures scientifically accurate?
// - Is sizing appropriate and consistent?

// Test 4: Citation System
// Look for numbered citations [1], [2], etc.
browser_hover(element="citation number", ref="[ref]")
browser_screenshot()  // Capture tooltip

// Check citation tooltips for:
// - Author information (not "undefined")
// - Publication title
// - Year
// - Proper formatting

// Scroll to bottom for bibliography
browser_press_key("End")
browser_screenshot()  // Capture bibliography section

// Test 5: Interactive Elements
// Look for PhET simulation links or other interactive content
browser_click(element="interactive link", ref="[ref]")  // If present
// Verify links open appropriately

// Test 6: Navigation Back
browser_click(element="← Back to Course Overview", ref="[ref]")
browser_wait(time=2)
browser_screenshot()  // Confirm return to homepage
```

### **Phase 3: Priority Unit Focus**

**Units 6, 7, 8, 9, 11, 12** require extra attention as recently fixed:

```javascript
// For each priority unit, add these additional checks:

// Extended Citation Testing
// These units were recently modified and may have citation issues
browser_hover(element="citation [1]", ref="[ref]")
browser_hover(element="citation [2]", ref="[ref]")
browser_hover(element="citation [3]", ref="[ref]")
// Document any "undefined" values or missing information

// Content Loading Verification
// Ensure the recent loader function fixes worked
browser_console_messages()  // Check for JavaScript errors
// Look for "Failed to load lesson" or import errors

// SVG Quality Assessment
// Recently fixed units may have SVG inconsistencies
browser_screenshot()  // Capture each SVG section
// Pay special attention to:
// - Molecular structure accuracy
// - Text positioning within frames
// - Consistent sizing across diagrams
```

---

## 📊 Documentation Requirements

### **For Each Unit Tested:**

1. **Update Testing Log**
   ```
   Edit: /Users/matiasmirvois/Desktop/chemprep9-online-course/CHEMISTRY_APP_TESTING_LOG.md
   
   Update unit status:
   | X | Unit Name | ✅/⚠️/❌ | ✅/⚠️/❌ | ✅/⚠️/❌ | ✅/⚠️/❌ | ✅/⚠️/❌ | ✅/⚠️/❌ | Notes |
   ```

2. **Issue Documentation**
   ```
   For any problems found:
   
   ISSUE #00X
   Unit: [Number] - [Title]
   Severity: [Critical/High/Medium/Low]
   Category: [Loading/Content/SVG/Citations/Navigation/UI]
   
   Description: [Clear problem description]
   
   Steps to Reproduce:
   1. [Exact steps]
   2. [Browser actions taken]
   
   Expected vs Actual:
   - Expected: [What should happen]
   - Actual: [What actually happened]
   
   Screenshots: [Reference browser_screenshot() artifacts]
   Console Errors: [Any JavaScript errors found]
   ```

3. **Screenshot Organization**
   ```
   Take screenshots at key points:
   - Homepage with all units
   - Unit intro page
   - Main lesson content (multiple if needed)
   - Close-ups of problematic SVGs
   - Citation tooltip examples
   - Bibliography sections
   - Any error states
   ```

---

## 🎯 Success Criteria & Priorities

### **Critical Success Factors**
- [ ] All units load without blocking errors
- [ ] Content displays as proper HTML (no raw markdown)
- [ ] Navigation functions correctly throughout
- [ ] No JavaScript console errors preventing functionality

### **High Priority Issues**
- [ ] SVG diagrams display with proper sizing and positioning
- [ ] Citation system shows real data (no "undefined" values)
- [ ] Interactive elements (PhET links) are functional
- [ ] Recently fixed units (6-12) load and function correctly

### **Quality Indicators**
- [ ] Consistent visual presentation across units
- [ ] Scientific accuracy in all diagrams and formulas
- [ ] Professional appearance and user experience
- [ ] Fast loading times (< 3 seconds per unit)

---

## 🚨 Common Issues to Watch For

### **Recently Fixed Units (6-12)**
- **Citation Problems**: "undefined" author, title, or year values
- **Loading Failures**: "Failed to load lesson" errors
- **Content Gaps**: Missing sections or incomplete rendering
- **SVG Issues**: Inconsistent sizing or positioning

### **SVG Quality Issues**
- **Text Cutoff**: Titles extending beyond frame boundaries
- **Oversized Elements**: Molecules too large for containers
- **Poor Positioning**: Overlapping text or misaligned elements
- **Inconsistent Scaling**: Varying sizes across similar diagrams

### **Interactive Element Problems**
- **Broken Links**: PhET simulations not accessible
- **Citation Tooltips**: Missing or malformed hover information
- **Navigation Bugs**: Back buttons not working correctly
- **Performance Issues**: Slow loading or memory problems

---

## 🔧 Quick Fix Guidelines

### **If You Find Issues:**

1. **Create Backup First**
   ```bash
   cp src/data/lessonContent/enhanced/c[X]l1Enhanced.ts src/data/lessonContent/enhanced/c[X]l1Enhanced.ts.backup-$(date +%Y%m%d-%H%M%S)
   ```

2. **Document Before Fixing**
   - Take screenshots of the problem
   - Record exact error messages
   - Note steps to reproduce

3. **Apply Minimal Changes**
   - Focus on one issue at a time
   - Test immediately after each change
   - Verify no regression in other functionality

4. **Update Documentation**
   - Add to testing log
   - Update issue tracker
   - Record changes made

---

## 📈 Expected Timeline

### **Efficient Testing Schedule**
- **Smoke Test**: 15 minutes (all 12 units basic check)
- **Unit 2**: 20 minutes (first detailed validation)
- **Units 3-5**: 15 minutes each (should be mostly working)
- **Units 6-12**: 25 minutes each (recently fixed, need thorough testing)
- **Issue Documentation**: Ongoing throughout testing
- **Total Estimated Time**: 3-4 hours for comprehensive validation

### **Progressive Approach**
1. **Start Simple**: Begin with Unit 2 (likely working baseline)
2. **Build Confidence**: Validate a few working units first
3. **Tackle Challenges**: Focus on recently fixed units (6-12)
4. **Document Thoroughly**: Track all findings for future reference

---

## 🎯 Final Notes

### **Key Reminders**
- **Browser MCP is functional** - use it extensively for interaction
- **Take screenshots liberally** - visual evidence is crucial
- **Update the testing log** - maintain accurate progress tracking
- **Focus on recently fixed units** - these are most likely to have issues
- **Document everything** - clear issue tracking enables efficient fixes

### **Success Indicators**
- Systematic progress through all 12 units
- Clear documentation of any issues found
- Visual verification through screenshots
- Updated testing log with accurate status
- Actionable issue reports for any problems

---

**Begin testing with Unit 2 and work systematically through all remaining units. Use Browser MCP extensively and document everything thoroughly!**

Good luck! 🧪⚗️📊