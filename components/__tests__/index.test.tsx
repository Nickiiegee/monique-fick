// /pages/login/index.test.tsx
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import LoginPage from "../../pages/login/index"; // Adjust the import path as necessary
import { signIn as mockedSignIn } from "next-auth/react";
import { jest } from "@jest/globals";

// Mock the signIn function from next-auth/react
jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

const signIn = mockedSignIn as jest.Mock;

describe("Login Page Tests", () => {
  // Test 1: Ensure button renders with correct label
  test("renders login button with correct label", () => {
    const { getByRole } = render(<LoginPage />);
    expect(getByRole("button", { name: "logo Log in with Azure AD" })).toBeInTheDocument();
  });
});
