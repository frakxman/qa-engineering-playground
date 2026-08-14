# Non-Functional Testing

Non-Functional Testing evaluates the quality attributes of a software application rather than its functionality.

Instead of verifying **what the software does**, it verifies **how well it performs** under different conditions.

---

# Purpose

Ensure that the application satisfies quality requirements such as:

- Performance
- Security
- Reliability
- Scalability
- Accessibility
- Maintainability

---

# Characteristics

- Quality-oriented
- User experience focused
- Often automated
- Evaluates system behavior
- Usually executed after functional validation

---

# Common Types

## Performance Testing

Measures response times and resource consumption.

---

## Load Testing

Evaluates behavior under expected user load.

---

## Stress Testing

Pushes the system beyond normal capacity.

---

## Security Testing

Identifies vulnerabilities.

---

## Accessibility Testing

Ensures usability for people with disabilities.

---

## Compatibility Testing

Verifies operation across browsers, devices and operating systems.

---

## Reliability Testing

Measures stability over time.

---

## Scalability Testing

Evaluates how the system handles increased demand.

---

# Examples

Performance

```
Can the API respond in less than 300 ms?
```

---

Load

```
Can the application support
10,000 concurrent users?
```

---

Security

```
Can unauthorized users access protected resources?
```

---

Accessibility

```
Can users navigate using only a keyboard?
```

---

# Advantages

- Improves user experience.
- Reduces production risks.
- Detects bottlenecks.
- Validates scalability.
- Increases system reliability.

---

# Common Tools

Performance

- k6
- JMeter

Security

- OWASP ZAP
- Burp Suite

Accessibility

- Lighthouse
- Axe

Compatibility

- BrowserStack

---

# Functional vs Non-Functional

| Functional | Non-Functional |
|------------|----------------|
| Verifies features | Verifies quality |
| Login works | Login is fast |
| Payment succeeds | Payment is secure |
| Report generated | Report loads quickly |

---

# Best Practices

- Define measurable quality goals.
- Execute tests in production-like environments.
- Monitor performance continuously.
- Automate repetitive validations.

---

# Key Takeaways

- Non-Functional Testing evaluates software quality.
- It focuses on user experience and system behavior.
- It complements Functional Testing.
- Quality attributes are essential for production-ready software.
