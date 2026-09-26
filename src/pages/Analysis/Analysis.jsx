/**
 * Analysis.jsx — Complaint Statistics and Analysis page.
 *
 * This page reads all complaint data from localStorage and calculates
 * statistics that give citizens and the public an overview of what
 * issues are being raised across Kenya.
 *
 * All charts are built with plain CSS bars (no external chart libraries)
 * so the code remains simple and easy for the team to understand and modify.
 *
 * Data flow:
 *   localStorage → getComplaints() → statistics calculated here → displayed
 */

import React, { useMemo } from 'react';
import { getComplaints, CATEGORY_TO_LABEL } from '../../utils/voicee';
import './analysis.css';

function Analysis({ navigate }) {

  // Read all complaints from localStorage once when the page loads
  const complaints = useMemo(() => getComplaints(), []);

  // ── STATISTICS CALCULATIONS ─────────────────────────────────────────

  const totalComplaints = complaints.length;

  // Count complaints grouped by status
  const statusCounts = useMemo(() => {
    const counts = { Submitted: 0, 'Under Review': 0, Resolved: 0 };
    complaints.forEach((c) => {
      if (counts[c.status] !== undefined) {
        counts[c.status]++;
      }
    });
    return counts;
  }, [complaints]);

  // Percentage of complaints that have been resolved
  const resolvedPercent = totalComplaints > 0
    ? Math.round((statusCounts.Resolved / totalComplaints) * 100)
    : 0;

  // Count complaints grouped by category, sorted highest first
  const categoryCounts = useMemo(() => {
    const counts = {};
    complaints.forEach((c) => {
      if (c.category) {
        counts[c.category] = (counts[c.category] || 0) + 1;
      }
    });
    // Sort from most to least complaints so the bar chart reads top-to-bottom
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [complaints]);

  // Count complaints grouped by county, take top 8 for display
  const countyCounts = useMemo(() => {
    const counts = {};
    complaints.forEach((c) => {
      if (c.county) {
        counts[c.county] = (counts[c.county] || 0) + 1;
      }
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8); // Top 8 counties by complaint count
  }, [complaints]);

  // The highest count in categoryCounts — used to scale bar widths to 100%
  const maxCategoryCount = categoryCounts.length > 0 ? categoryCounts[0][1] : 1;

  // The highest count in countyCounts — used to scale county bar widths
  const maxCountyCount = countyCounts.length > 0 ? countyCounts[0][1] : 1;

  return (
    <div className="voicee-analysis-page">

      <main className="analysis-main">
        <div className="analysis-content-wrapper">

          {/* ── PAGE HEADER ──────────────────────────────── */}
          <div className="analysis-page-header">
            <div>
              <h1>Complaint Analysis</h1>
              <p>Statistics and trends from complaints submitted across Kenya.</p>
            </div>
            <button
              className="analysis-community-btn"
              onClick={() => navigate('community')}
            >
              ← Community Dashboard
            </button>
          </div>

          {/* ── TOP STAT CARDS ───────────────────────────── */}
          <div className="analysis-stats-row">

            <div className="analysis-stat-card">
              <span className="analysis-stat-label">Total Complaints</span>
              <span className="analysis-stat-value">{totalComplaints}</span>
            </div>

            <div className="analysis-stat-card">
              <span className="analysis-stat-label">Under Review</span>
              <span className="analysis-stat-value analysis-stat-amber">
                {statusCounts['Under Review']}
              </span>
            </div>

            <div className="analysis-stat-card">
              <span className="analysis-stat-label">Resolved</span>
              <span className="analysis-stat-value analysis-stat-green">
                {statusCounts.Resolved}
              </span>
            </div>

            <div className="analysis-stat-card">
              <span className="analysis-stat-label">Resolution Rate</span>
              <span className="analysis-stat-value analysis-stat-green">
                {resolvedPercent}%
              </span>
            </div>

          </div>

          {/* ── CHARTS ROW ───────────────────────────────── */}
          <div className="analysis-charts-row">

            {/* COMPLAINTS BY CATEGORY — horizontal bar chart */}
            <section className="analysis-chart-card">

              <h2 className="analysis-chart-title">Complaints by Category</h2>

              {categoryCounts.length === 0 ? (
                <p className="analysis-empty">No complaint data available.</p>
              ) : (
                <div className="analysis-bar-chart">
                  {categoryCounts.map(([category, count]) => (
                    <div key={category} className="analysis-bar-row">

                      {/* Category name label */}
                      <span className="analysis-bar-label">
                        {CATEGORY_TO_LABEL[category] || category}
                      </span>

                      {/* Bar track + filled bar */}
                      <div className="analysis-bar-track">
                        <div
                          className="analysis-bar-fill"
                          style={{ width: `${(count / maxCategoryCount) * 100}%` }}
                          role="progressbar"
                          aria-valuenow={count}
                          aria-valuemax={maxCategoryCount}
                          aria-label={`${CATEGORY_TO_LABEL[category] || category}: ${count} complaints`}
                        />
                      </div>

                      {/* Numeric count */}
                      <span className="analysis-bar-count">{count}</span>

                    </div>
                  ))}
                </div>
              )}

            </section>

            {/* STATUS BREAKDOWN — visual summary of complaint statuses */}
            <section className="analysis-chart-card">

              <h2 className="analysis-chart-title">Status Breakdown</h2>

              {totalComplaints === 0 ? (
                <p className="analysis-empty">No complaint data available.</p>
              ) : (
                <div className="analysis-status-breakdown">

                  {/* Submitted */}
                  <div className="analysis-status-item">
                    <div className="analysis-status-header">
                      <span className="analysis-status-dot analysis-dot-blue" />
                      <span className="analysis-status-name">Submitted</span>
                      <span className="analysis-status-count">{statusCounts.Submitted}</span>
                    </div>
                    <div className="analysis-status-bar-track">
                      <div
                        className="analysis-status-bar analysis-bar-blue"
                        style={{ width: `${(statusCounts.Submitted / totalComplaints) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Under Review */}
                  <div className="analysis-status-item">
                    <div className="analysis-status-header">
                      <span className="analysis-status-dot analysis-dot-amber" />
                      <span className="analysis-status-name">Under Review</span>
                      <span className="analysis-status-count">{statusCounts['Under Review']}</span>
                    </div>
                    <div className="analysis-status-bar-track">
                      <div
                        className="analysis-status-bar analysis-bar-amber"
                        style={{ width: `${(statusCounts['Under Review'] / totalComplaints) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Resolved */}
                  <div className="analysis-status-item">
                    <div className="analysis-status-header">
                      <span className="analysis-status-dot analysis-dot-green" />
                      <span className="analysis-status-name">Resolved</span>
                      <span className="analysis-status-count">{statusCounts.Resolved}</span>
                    </div>
                    <div className="analysis-status-bar-track">
                      <div
                        className="analysis-status-bar analysis-bar-green"
                        style={{ width: `${(statusCounts.Resolved / totalComplaints) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Resolution rate summary */}
                  <div className="analysis-resolution-summary">
                    <span className="analysis-resolution-pct">{resolvedPercent}%</span>
                    <span className="analysis-resolution-label">of complaints resolved</span>
                  </div>

                </div>
              )}

            </section>

          </div>

          {/* ── TOP COUNTIES ─────────────────────────────── */}
          <section className="analysis-chart-card analysis-full-width">

            <h2 className="analysis-chart-title">Top Counties by Complaints</h2>

            {countyCounts.length === 0 ? (
              <p className="analysis-empty">No complaint data available.</p>
            ) : (
              <div className="analysis-county-grid">
                {countyCounts.map(([county, count], index) => (
                  <div key={county} className="analysis-county-item">

                    {/* Rank number */}
                    <span className="analysis-county-rank">#{index + 1}</span>

                    {/* County name */}
                    <span className="analysis-county-name">{county}</span>

                    {/* Horizontal bar */}
                    <div className="analysis-bar-track analysis-county-track">
                      <div
                        className="analysis-bar-fill"
                        style={{ width: `${(count / maxCountyCount) * 100}%` }}
                      />
                    </div>

                    {/* Count */}
                    <span className="analysis-bar-count">{count}</span>

                  </div>
                ))}
              </div>
            )}

          </section>

          {/* ── HOW TO USE NOTE ──────────────────────────── */}
          <div className="analysis-note">
            <p>
              Statistics are calculated from complaints stored in your browser.
              Submit a complaint to contribute to this data.
            </p>
            <button onClick={() => navigate('submit')} className="analysis-note-btn">
              Submit a Complaint →
            </button>
          </div>

        </div>
      </main>

    </div>
  );
}

export default Analysis;
