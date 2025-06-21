# Phase 4: Quality Assurance Testing Instructions

## 🎯 **Objective**
Systematically test all 6 lessons to verify content processing consistency and identify any remaining issues before proceeding to missing lesson development.

---

## 🧪 **Manual Testing Protocol**

### **Option A: Automated Browser Testing (Recommended)**

**Step 1**: Open browser and navigate to `http://localhost:5175`

**Step 2**: Open browser Developer Tools (F12 or Cmd+Option+I)

**Step 3**: Go to the Console tab

**Step 4**: Copy and paste the contents of `quick-lesson-test.js` into the console

**Step 5**: Run automated tests:
```javascript
// Test all lessons automatically
runAllLessonTests()
```

**Step 6**: Review results:
```javascript
// View detailed results
window.QAResults
```

### **Option B: Manual Visual Testing**

If you prefer manual testing, follow this checklist for each lesson:

#### **Lessons to Test** (6 total)
1. **c1l1** - Introduction to Chemistry & Matter Classification
2. **c2l1** - Atomic Structure  
3. **c3l1** - Periodic Table Properties
4. **c4l1** - Chemical Bonding
5. **c5l1** - Chemical Reactions & Stoichiometry
6. **c10l1** - Redox & Electrochemistry

#### **For Each Lesson:**

**Navigation**: Click lesson from dashboard → Click "Learn" tab

**✅ Content Processing Checks:**

1. **Citations** (Critical)
   - ❌ Should NOT see: `${citationInline('citation-id', 1)}`
   - ✅ Should see: Interactive superscript numbers like ¹ ² ³
   - ✅ Hover over citation numbers to see tooltips
   - ✅ Check console for: "Found citations: [...]"

2. **Markdown Formatting** (Critical)
   - ❌ Should NOT see: `**bold text**` or `### Header` as raw text
   - ✅ Should see: Properly formatted **bold text** and headers
   - ✅ Lists should display as bulleted/numbered lists
   - ✅ Headers should have proper typography hierarchy

3. **SVG Graphics** (If present)
   - ✅ SVG diagrams should be wrapped in bordered containers
   - ✅ Should be responsive (resize with window)
   - ✅ Should have theme-appropriate styling
   - ✅ Check console for: "Found SVG components: X"

4. **Practice Problems** (Navigate to "Practice" tab)
   - ✅ Questions should display with proper formatting
   - ✅ "Show Answer" button should work
   - ✅ Answers should format correctly (no raw markdown)
   - ✅ Navigation between problems should work

**✅ Visual Quality Checks:**

5. **Typography**
   - ✅ Consistent heading hierarchy and styling
   - ✅ Proper line spacing and readability
   - ✅ Dark mode compatibility (toggle theme to test)
   - ✅ Mobile responsiveness (resize window)

6. **Layout**
   - ✅ No content bleeding outside containers
   - ✅ Proper spacing between sections
   - ✅ Cards and components align correctly
   - ✅ All navigation elements functional

**✅ Performance Checks:**

7. **Loading & Errors**
   - ✅ Content loads without console errors
   - ✅ Smooth navigation between lesson sections
   - ✅ Debug information visible in console (development mode)

---

## 📋 **Test Results Template**

### **For Each Lesson, Record:**

```
Lesson: [ID] - [Title]
Date: [Date]
Tester: [Your name]

Content Processing:
☐ Citations: PASS/FAIL - [notes]
☐ Markdown: PASS/FAIL - [notes]  
☐ SVG: PASS/FAIL/N/A - [notes]
☐ Practice: PASS/FAIL - [notes]

Visual Quality:
☐ Typography: PASS/FAIL - [notes]
☐ Layout: PASS/FAIL - [notes]

Performance:
☐ Loading: PASS/FAIL - [notes]

Issues Found:
- [List any specific problems]

Overall Score: ___/7 tests passed
```

---

## 🚨 **Critical Issues to Report**

**Immediate Fix Required:**
- Raw `${citationInline(...)}` visible to users
- Raw markdown (`**bold**`, `### headers`) in lesson content
- Console errors during content processing
- Broken navigation or non-functional buttons

**Important but Non-Blocking:**
- Poor typography or spacing
- SVG display issues
- Practice problem formatting problems
- Mobile/tablet layout issues

**Nice to Have:**
- Minor styling inconsistencies
- Performance optimizations
- Additional debug information

---

## 📊 **Expected Results**

### **Success Criteria for Phase 4:**
- **95%+ of tests pass** across all 6 lessons
- **Zero critical content processing failures**
- **No raw template literals visible** to users
- **Consistent formatting** across all lessons
- **Functional practice problems** in all lessons

### **If Tests Pass:**
✅ Ready to proceed to **Phase 5: Documentation & Insights**

### **If Issues Found:**
⚠️ Address critical issues before proceeding
📝 Document non-critical issues for future improvement

---

## 🔧 **Troubleshooting**

### **Common Issues & Solutions:**

**Issue**: Citations still showing as raw text
**Solution**: Check content processor import in EnhancedLessonViewer.tsx

**Issue**: Markdown not processing
**Solution**: Verify processLessonContent function is being called

**Issue**: Console errors during processing
**Solution**: Check citation database for missing citations

**Issue**: SVG not displaying properly
**Solution**: Verify SVG extraction and wrapper CSS

### **Getting Help:**

1. **Check browser console** for processing errors
2. **Verify dev server** is running on correct port
3. **Clear browser cache** if content seems stale
4. **Try different browser** if issues persist

---

## 📈 **Next Steps**

After completing QA testing:

1. **Document results** using template above
2. **Report any critical issues** found
3. **Confirm readiness** for Phase 5
4. **Proceed to Documentation & Insights** if tests pass

**Quality gate**: Content processing must be working consistently across all 6 lessons before proceeding to missing lesson development. 