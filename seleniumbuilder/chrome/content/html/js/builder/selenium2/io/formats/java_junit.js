builder.selenium2.io.addDerivedLangFormatter("Java", {
  name: "Java/JUnit",
  start:
    "import org.junit.After;\n" +
    "import org.junit.Before;\n" +
    "import org.junit.AfterClass;\n" +
    "import org.junit.BeforeClass;\n" +
    "import org.junit.Test;\n" +
    "import static org.junit.Assert.*;\n" +
    "{extraImports}\n" +
    "import java.util.concurrent.TimeUnit;\n" +
    "import java.util.Date;\n" +
    "import java.io.File;\n" +
    "import org.openqa.selenium.support.ui.Select;\n" +
    "import org.openqa.selenium.interactions.Actions;\n" +
    "import org.openqa.selenium.firefox.FirefoxDriver;\n" +
    "import org.openqa.selenium.*;\n" +
    "import static org.openqa.selenium.OutputType.*;\n" +
    "\n" +
    "public class {scriptName} {\n" +
    "    {driverVar}\n" +
    "    \n" +
    "    @Before\n" +
    "    public void setUp() throws Exception {\n" +
    "        {initDriver}\n" +
    "        wd.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);\n" +
    "    }\n" +
    "    \n" +
    "    @Test\n" +
    "    public void {scriptName}() {\n",
  driverVar:
    "FirefoxDriver wd;",
  initDriver:
    "wd = new FirefoxDriver();",
  end:
    "    }\n" +
    "    \n" +
    "    @After\n" +
    "    public void tearDown() {\n" +
    "        wd.close();\n" +
    "    }\n" +
    "    \n" +
    "    public static boolean isAlertPresent(FirefoxDriver wd) {\n" +
    "        try {\n" +
    "            wd.switchTo().alert();\n" +
    "            return true;\n" +
    "        } catch (NoAlertPresentException e) {\n" +
    "            return false;\n" +
    "        }\n" +
    "    }\n" +
    "}\n",
  assert: function(step, escapeValue, doSubs, getter) {
    if (step.negated) {
      return "        assertNotEquals(" + doSubs(getter.cmp) + ", " + doSubs(getter.getter) + ");\n";
    } else {
      return "        assertEquals(" + doSubs(getter.cmp) + ", " + doSubs(getter.getter) + ");\n";
    }
  },
  boolean_assert: function(step, escapeValue, doSubs, getter) {
    if (step.negated) {
      return "        assertFalse(" + doSubs(getter.getter) + ");\n";
    } else {
      return "        assertTrue(" + doSubs(getter.getter) + ");\n";
    }
  }
});